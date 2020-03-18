import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import routes from './routes';

function App() {
  return (
    <Router key={Math.random()}>
    <div className="App">
      {console.log(routes())}
      {routes()}
    </div>
    </Router>
  );
}

export default App;
