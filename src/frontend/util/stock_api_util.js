import axios from "axios";
const keyy = `pk_23ebb49439454751b1d21c6fe2fe3b09`
export const fetchStock = (ticker) =>
  axios.get(
    `https://cloud.iexapis.com/stable/stock/${ticker}/company/?token=${keyy}`
  );



export const fetchStockDailyData = (ticker) =>
  axios.get(
    `https://cloud.iexapis.com/stable/stock/${ticker}/chart/1y/?token=${keyy}`
  );

export const fetchStock5yData = (ticker) =>
  axios.get(
    `https://cloud.iexapis.com/stable/stock/${ticker}/chart/5y/?token=${keyy}`
  );

export const fetchStockIntradayData = (ticker) =>
  axios.get(
    `https://cloud.iexapis.com/stable/stock/${ticker}/intraday-prices/?token=${keyy}`
  );



export const fetchStockInfo = (ticker) =>
  axios.get(
    `https://cloud.iexapis.com/stable/stock/${ticker}/stats?token=${keyy}`
  );

export const fetchStockInfo2 = (ticker) =>
  axios.get(
    `https://cloud.iexapis.com/stable/stock/${ticker}/batch?types=quote&token=${keyy}`
  );
