import React, { Profiler, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Profile from "./components/profile";
import Home from "./components/home";
import Signup from "./components/signup";
import Contest from "./components/contest";
import ContestDetails from "./components/contestDetails";
import BuyVotes from "./components/buyvotes";

const App = () => {
  const [token, setToken] = useState("");
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <Router>
      <React.Fragment>
        <Route token={token} path="/" exact component={Home}></Route>
        <Route token={token} path="/login" exact component={Login}></Route>
        <Route token={token} path="/signup" exact component={Signup}></Route>
        <Route token={token} path="/profile" exact component={Profile}></Route>
        <Route token={token} path="/contest" exact component={Contest}></Route>
        <Route
          path="/contest-details/:contestID"
          component={ContestDetails}
        ></Route>
        <Route path="/buy-votes/:contestID" component={BuyVotes}></Route>
      </React.Fragment>
    </Router>
  );
};

export default App;
