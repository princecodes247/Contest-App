import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Signup from "./components/signup";
import Contest from "./components/contest";
import ContestDetails from "./components/contestDetails";
import BuyVotes from "./components/buyvotes";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/contest" exact component={Contest}></Route>
        <Route
          path="/contest-details/:contestName/:contestPrize/:contestDate"
          component={ContestDetails}
        ></Route>
        <Route path="/buy-votes/" exact component={BuyVotes}></Route>
      </React.Fragment>
    </Router>
  );
};

export default App;
