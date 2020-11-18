import * as StockApiUtil from '../util/stock_api_util';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK_INFO = 'RECEIVE_STOCK_INFO';
export const RECEIVE_STOCK_INFO2 = 'RECEIVE_STOCK_INFO2';
export const RECEIVE_STOCK_INTRADAY_DATA = 'RECEIVE_STOCK_INTRADAY_DATA';
export const RECEIVE_STOCK_DAILY_DATA = 'RECEIVE_STOCK_DAILY_DATA';
export const RECEIVE_STOCK_NEWS = 'RECEIVE_STOCK_NEWS';
export const RECEIVE_USER_STOCKS = 'RECEIVE_USER_STOCKS';
export const START_DAILY_LOADING = 'START_DAILY_LOADING';
export const START_STOCK_LOADING = 'START_STOCK_LOADING';
export const STOP_STOCK_LOADING = 'STOP_STOCK_LOADING';

const receiveStock = stock => ({
  type: RECEIVE_STOCK,
  stock
});

const receiveStocks = allStocks => ({
  type: RECEIVE_STOCKS,
  allStocks
});

const receiveStockInfo = (ticker, stockInfo) => ({
  type: RECEIVE_STOCK_INFO,
  ticker,
  stockInfo
});

const receiveStockInfo2 = (ticker, stockInfo) => ({
  type: RECEIVE_STOCK_INFO2,
  ticker,
  stockInfo
});

const receiveStockIntradayData = (ticker, data) => ({
  type: RECEIVE_STOCK_INTRADAY_DATA,
  ticker,
  data
});

const receiveStockDailyData = (ticker, data) => ({
  type: RECEIVE_STOCK_DAILY_DATA,
  ticker,
  data
});

const receiveStockNews = (ticker, news) => ({
  type: RECEIVE_STOCK_NEWS,
  ticker,
  news
});

const receiveUserStocks = stocks => ({
  type: RECEIVE_USER_STOCKS,
  stocks
});

const startDailyLoading = () => ({
  type: START_DAILY_LOADING
});

const startStockLoading = () => ({
  type: START_STOCK_LOADING
});

const stopStockLoading = () => ({
  type: STOP_STOCK_LOADING
});

export const fetchStock = ticker => dispatch => {
  const performFetches = () => Promise.all([
    dispatch(fetchStockInfo(ticker)),
    dispatch(fetchStockInfo2(ticker)),
    dispatch(fetchStockIntradayData(ticker)),
    dispatch(fetchStockDailyData(ticker)),
  ]).then(() => dispatch(stopStockLoading()));

  dispatch(startStockLoading());
  return StockApiUtil.fetchStock(ticker)
    .then(stock => dispatch(receiveStock(stock.data)))
    .then(performFetches);
};



export const fetchStockBasic = (ticker) => dispatch => (
  StockApiUtil.fetchStock(ticker)
    .then(stock => dispatch(receiveStock(stock.data)))
);

export const fetchStockInfo = ticker => dispatch => (
  StockApiUtil.fetchStockInfo(ticker)
    .then(stockInfo => dispatch(receiveStockInfo(ticker, stockInfo.data)))
);
export const fetchStockInfo2 = ticker => dispatch => (
  StockApiUtil.fetchStockInfo2(ticker)
    .then(stockInfo => dispatch(receiveStockInfo2(ticker, stockInfo.data)))
);

export const fetchStockIntradayData = ticker => dispatch => {
  StockApiUtil.fetchStockIntradayData(ticker)
    .then(data => dispatch(receiveStockIntradayData(ticker, data.data)))
};

export const fetchStockDailyData = ticker => dispatch => (
 
  StockApiUtil.fetchStockDailyData(ticker)
    .then(data => dispatch(receiveStockDailyData(ticker, data.data)))
);

export const fetchStock5yData = ticker => dispatch => {
  dispatch(startDailyLoading());
  return StockApiUtil.fetchStock5yData(ticker)
    .then(data => dispatch(receiveStockDailyData(ticker, data.data)))
};



