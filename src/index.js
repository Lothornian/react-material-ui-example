import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TapPlugin from 'react-tap-event-plugin';
import './index.css';

TapPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
