import React from 'react';
import ReactDOM from 'react-dom';
import './pages/index.css';
import App from './components/App';
import Admin from './components/Admin/Admin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
