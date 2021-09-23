import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import Home2 from "./Components/Home2";
import Home3 from "./Components/Home3";
import PrivateRoute from "./Components/PrivateRoute";
import Shippment from "./Components/Shippment";
import LogIn from "./LogIn";
export const userContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
   <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/home2">
            <Home2 />
          </PrivateRoute>
          <Route path="/home3">
            <Home3 />
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <PrivateRoute path="/shippment">
            <Shippment />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
   </userContext.Provider>
  );
}

export default App;
