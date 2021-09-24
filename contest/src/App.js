import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Signup from './signup'
import Contest from "./contest";
import ContestDetails from "./contestDetails";
import BuyVotes from "./buyvotes";



const App = () => {
  return (
    <Router> 
      <React.Fragment>

      <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/contest" exact component={Contest}></Route>
        <Route path="/contest-details/" exact component={ContestDetails}></Route>
        <Route path="/buy-votes/" exact component={BuyVotes}></Route>




    
  
      </React.Fragment>
      </Router>
  );
};

export default App;

