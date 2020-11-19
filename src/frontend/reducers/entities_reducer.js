import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stocksReducer from './stocks_reducer';
import transactionsReducer from './transactions_reducer';

const entitiesReducer = combineReducers({
  stocks: stocksReducer,
});

export default entitiesReducer;
