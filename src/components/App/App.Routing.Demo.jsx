import React from "react";
import { Switch, Route } from "react-router-dom";

import { Demo as Button } from '../Button/Button.Demo'
import { Demo as Checkbox } from '../Checkbox/Checkbox.Demo'
import { Demo as Image } from '../Image/Image.Demo'
import { Demo as Input } from '../Input/Input.Demo'
import { Demo as Layout} from '../Layout/Layout.Demo'
import { Demo as Text } from '../Text/Text.Demo'
import { Demo as Link } from '../Link/Link.Demo'
import { Demo as  Alert} from '../Alert/Alert.Demo'
import { Demo as  ItemPreview} from '../ItemPreview/ItemPreview.Demo'
import { Demo as  CustomIcon} from '../CustomIcon/CustomIcon.Demo'


export const Demos = () => {
    return (
        <Switch>
            <Route path="/demo/button">
                <Button />
            </Route>

            <Route path="/demo/customIcon">
                <CustomIcon />
            </Route>

            <Route path="/demo/checkbox">
                <Checkbox />
            </Route>

            <Route path="/demo/image">
                <Image />
            </Route>

            <Route path="/demo/input">
                <Input />
            </Route>

            <Route path="/demo/layout">
                <Layout />
            </Route>

            <Route path="/demo/text">
                <Text />
            </Route>

            <Route path="/demo/link">
                <Link />
            </Route>

            <Route path="/demo/alert">
                <Alert />
            </Route>

            <Route path="/demo/itemPreview">
                <ItemPreview />
            </Route>

        </Switch>
    );
};

  
export default Demos;

