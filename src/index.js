import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootComponent from './frontend/easy_trade';
import reportWebVitals from './reportWebVitals';
import StockShow from './frontend/components/stocks/stock_show'
ReactDOM.render(
  <React.StrictMode>
   <StockShow ticker="AMZN"/>
    {/* <RootComponent /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
