import React from "react";
import { Switch, Route  } from "react-router-dom";

import { SyncEmail } from "../../views/sync/SyncEmail";
import { SyncCheck } from "../../views/sync/SyncCheck";

export const Sync = () => {
    return (
        <Switch>
            <Route path="/sync/check">
                <SyncCheck />
            </Route>

            <Route path="/sync/email">
                <SyncEmail />
            </Route>
        </Switch>
    );
};

export default Sync;