import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import Home2 from "./Components/Home2";
import Home3 from "./Components/Home3";
function App() {
  return (
   <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/home2">
            <Home2 />
          </Route>
          <Route path="/home3">
            <Home3 />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
