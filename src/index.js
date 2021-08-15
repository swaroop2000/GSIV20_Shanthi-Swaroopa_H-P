import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import SearchMovies from "./searchMovies";
// You can choose your kind of history here (e.g. browserHistory)
// import { Router, hashHistory as history } from 'react-router';
// Your routes.js file
// import routes from './routes';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//   <Router routes={routes} history={history} />,
//   document.getElementById('your-app')
// );

ReactDOM.render(
  // <Router routes={routes} history={history} />,
  <div className="container">
    
    <SearchMovies></SearchMovies>
  </div>, document.getElementById("root")
)