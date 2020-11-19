import { connect } from 'react-redux';
import StockShow from './stock_show';
import {
  fetchStock,
  fetchStockInfo,
  fetchStockIntradayData,
  fetchStockDailyData,
} from '../../actions/stock_actions';
 
 

const mapStateToProps = (state, ownProps) => {
  
  return {    
    stock: state.entities.stocks[ownProps.match.params.ticker],
    loading: state.ui.stockLoading
  };
};

const mapDispatchToProps = dispatch => ({
  // fetchStock: ticker => dispatch(fetchStock(ticker)),
  // fetchStockInfo: ticker => dispatch(fetchStockInfo(ticker)),
  // fetchStockIntradayData: ticker => dispatch(fetchStockIntradayData(ticker)),
  // fetchStockDailyData: ticker => dispatch(fetchStockDailyData(ticker)), 
 
});

export default connect(mapStateToProps, mapDispatchToProps)(StockShow);
