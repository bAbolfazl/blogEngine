import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'



// import 'jquery'
// import '@popperjs/core'
import 'reset-css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/blogEngine'>
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
