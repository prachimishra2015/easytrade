import axios from "axios";
const keyy = `Tpk_3c16954bcfce4baf815f7d66d11f7354`
export const fetchStock = (ticker) =>
  axios.get(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/company/?token=${keyy}`
  );



export const fetchStockDailyData = (ticker) =>
  axios.get(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/1y/?token=${keyy}`
  );

export const fetchStock5yData = (ticker) =>
  axios.get(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/5y/?token=${keyy}`
  );

export const fetchStockIntradayData = (ticker) =>
  axios.get(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/intraday-prices/?token=${keyy}`
  );



export const fetchStockInfo = (ticker) =>
  axios.get(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/stats?token=${keyy}`
  );

export const fetchStockInfo2 = (ticker) =>
  axios.get(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/batch?types=quote&token=${keyy}`
  );
