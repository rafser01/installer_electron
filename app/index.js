import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import io from 'socket.io-client'
import {setState} from './actions/installerActions'
import mori from 'mori'
const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
const socket = io.connect('http://localhost:8090/', { query: "macId=cc:79:cf:f1:5e:c8" });
socket.on('state', state =>{
  console.log('vector  state', state.entries)
  if(state.entries!=undefined){
    store.dispatch(setState(state.entries))
    socket.close()
  }
})
socket.on('disconnect',()=>{
  console.log('disconnected client')
})
socket.on('error',() =>{
      console.log('error ------------------ ')
  })

