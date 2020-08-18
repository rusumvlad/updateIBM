import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Import bootstrap
import 'bootstrap/dist/css/bootstrap.css';

//Import router-dom
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

