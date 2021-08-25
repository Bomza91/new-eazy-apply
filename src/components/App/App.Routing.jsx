import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { context as authContext } from '../../hooks/useAuth';

import { Demos } from './App.Routing.Demo'
import { Auth } from "./App.Routing.Auth";
import { Create } from "./App.Routing.Create";

import {LandingPage} from "../../views/general/LandingPage";
import { EmailSent } from "../../views/general/EmailSent";
import { ItemsList } from "../../views/ItemsList"
import { General } from "./App.Routing.General"

import { LandingPage } from "../../views/general/LandingPage"

export const Routing = () => {
  const { loading, user } = useContext(authContext);

  if (loading){
    return null;
  }
  return (
   
      <Switch>
        <Route path="/demo">
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

        <General user={user} />
      </Switch>
    
  );
};
export default Routing;

