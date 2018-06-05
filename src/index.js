import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App
  first="Matthew"
  last="Nelson"/>,
   document.getElementById('root'));
registerServiceWorker();
