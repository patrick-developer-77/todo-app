import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Index.css'
import DATA from './data.json'

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);