import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/country/:countryName">
            <Details ></Details>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
