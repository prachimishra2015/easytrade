import React from "react";
import StockChart from "../charts/stock_chart";
import {
  fetchStock,
  fetchStockDailyData,
  fetchStock5yData,
  fetchStockIntradayData,
  fetchStockInfo,
  fetchStockInfo2,
} from "../../util/stock_api_util";
class StockShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: null,
    };
  }

  fetchStock = async (ticker) => {
    await fetchStock(ticker).then((res) => {
      console.log(res, "respoonce");
      if (res.status === 200) {
        this.setState({
          stock: res.data,
        });
      }
    });
    await fetchStockInfo2(ticker).then((res) => {    
      if (res.status === 200) {
        let old = this.state.stock;
        old.openPrice = res.data.quote.open || res.data.quote.previousClose;
        old.high = res.data.quote.high || res.data.quote.previousClose;
        old.low = res.data.quote.low || res.data.quote.previousClose;
        this.setState({
          stock: old,
        });
      }
    });
    await fetchStockIntradayData(ticker).then((res) => {
      if (res.status === 200) {
        let old = this.state.stock;
        old.intradayData = res.data;
        this.setState({
          stock: old,
        });
      }
    });
    await fetchStockDailyData(ticker).then((res) => {
      console.log(res, "respoonce2");
      if (res.status === 200) {
        let old = this.state.stock;
        old.dailyData = res.data;
        this.setState({
          stock: old,
        });
      }
    });

    
    // const performFetches = () => Promise.all([
    //   dispatch(fetchStockInfo(ticker)),
    //   dispatch(fetchStockInfo2(ticker)),
    //   dispatch(fetchStockIntradayData(ticker)),
    //   dispatch(fetchStockDailyData(ticker)),
    // ]).then(() => dispatch(stopStockLoading()));

    // dispatch(startStockLoading());
    // return StockApiUtil.fetchStock(ticker)
    //   .then(stock => dispatch(receiveStock(stock.data)))
    //   .then(performFetches);
  };

  componentDidMount() {
    const ticker = this.props.ticker;
    if (!this.state.stock || !this.state.stock.hasOwnProperty("intradayData")) {
      this.fetchStock(ticker);     
      // this.intervalID = setInterval(() => this.props.fetchStockIntradayData(ticker), 500000);
    }
  }

  componentDidUpdate(prevProps) {
    // if (
    //   this.props.match.params.ticker !== prevProps.match.params.ticker &&
    //   !this.props.stock
    // ) {
    //   clearInterval(this.intervalID);
    //   const ticker = this.props.match.params.ticker;
    //   this.props.fetchStock(ticker);
    //   this.intervalID = setInterval(
    //     () => this.props.fetchStockIntradayData(ticker),
    //     500000
    //   );
    // }
  }

  componentWillUnmount() {
    // clearInterval(this.intervalID);
  }

  render() {
    const { stock } = this.state;
    console.log("stocksss", stock, "statestock", this.state.stock);
    return (
      <div>
        {stock && stock.intradayData && stock.dailyData && (
          <StockChart stock={stock} fetchStock5yData={fetchStock5yData} ticker={this.props.ticker}/>
        )}
      </div>
    );
  }
}

export default StockShow;
