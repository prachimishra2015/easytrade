import React from 'react';
import StockShowContainer from './stocks/stock_show_container';
import UserProfileContainer from './users/user_profile_container';
import StockHistoryContainer from './transactions/stock_history_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>     
      <Route exact path="/stocks/:ticker" component={StockShowContainer}/>
      <Route exact path="/users/:id" component={UserProfileContainer} />
      <Route exact path="/history/:ticker" component={StockHistoryContainer} />
     </Switch>
  </div>
);

export default App;
