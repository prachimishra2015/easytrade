import React from 'react';
import Root from './components/Root';
import configureStore from './store/store';


const store = configureStore();
const RootComponent=()=>{
  return <Root store={store} />
}
export default RootComponent;