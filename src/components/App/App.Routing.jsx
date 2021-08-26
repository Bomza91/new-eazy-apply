import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { context as authContext } from '../../hooks/useAuth';

import { Demos } from './App.Routing.Demos'
import { Auth } from "./App.Routing.Auth";
import { Create } from "./App.Routing.Create";
import { Sync } from "./App.Routing.Sync";
import { Items } from "./App.Routing.Items";
import {LandingPage} from "../../views/general/LandingPage";

import { General } from "./App.Routing.General";

export const Routing = () => {
  const { loading, user } = useContext(authContext);

  if (loading){
    return null;
  }
  return (
   
      <Switch>
        <Route path="/demos">
          <Demos />
        </Route>

        <Route path="/items">
          {user ? <Items /> :  <Redirect to="/" />}
        </Route>

        <Route path="/sync">
          { user ? <Redirect to="/" /> : <Auth />}
        </Route>

        <Route path="/auth">
          { user ? <Redirect to="/sync/check" /> : <Auth />}
        </Route>

        <Route path="/create">
          { user ? <Redirect to="/sync/check" /> : <Create />}
        </Route>

        <Route path="/">
        { user ? <Redirect to="/sync/check" /> : <LandingPage />}
        </Route>


        <General  />
      </Switch>
    
  );
};
export default Routing;

