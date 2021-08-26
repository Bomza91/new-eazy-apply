import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { EmailSent } from "../../views/general/EmailSent";
import { LandingPage } from '../../views/general/LandingPage';

export const General = (props) => {
    const { user } = props;

    return (
        <Switch>
            <Route path="/sent">
                <EmailSent />
            </Route>

            <Route path="/">
                {user ? <Redirect to="/sync/check" /> : <LandingPage />}
            </Route>
        </Switch>
    )
}

export default General;