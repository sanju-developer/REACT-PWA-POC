import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SinglePost from "src/screens/singlePost";
import Posts from "src/screens/Posts";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} strict={true}>
          <Posts />
        </Route>
        <Route path="/post/:id/comments">
          <SinglePost />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routing;
