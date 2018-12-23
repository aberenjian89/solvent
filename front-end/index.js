import React from 'react'
import ReactDOM from 'react-dom'
import Root from './comonents/root'
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded',()=>{
  const preloadstate = localStorage.state 

  const store = configureStore(preloadstate)
  window.store = store 
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>,document.getElementById('root'))
})

