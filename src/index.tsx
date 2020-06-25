import React from 'react';
import ReactDOM from 'react-dom';
import './plugin';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * 首页
 * 注入Redux
 * 注入Service
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
