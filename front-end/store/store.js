import {applyMiddleware,createStore} from 'redux'
import  rootReducer  from '../reducers/root_reducer'
import logger from 'redux-logger'

const configureStore = (preloadedState = {}) =>{
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger));
  // store.subscribe(()=>{
  //   localStorage.state = JSON.stringify(store.getState())
  // });
  return store;
}

export default configureStore;