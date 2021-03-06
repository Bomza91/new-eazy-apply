import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { context as authContext } from '../../hooks/useAuth';

import { Demos } from './App.Routing.Demos'
import { Auth } from "./App.Routing.Auth";
import { Create } from "./App.Routing.Create";

// import { Sync } from "./App.Routing.Sync";
// import { Items } from "./App.Routing.Items";
// import {LandingPage} from "../../views/general/LandingPage";


// import { Demo as ButtonDemo } from "../Button/Button.Demo";
// import { Demo as CheckboxDemo } from "../Checkbox/Checkbox.Demo";
// import { Demo as ImageDemo } from "../Image/Image.Demo";
// import { Demo as InputDemo } from "../Input/Input.Demo";
// import { Demo as LayoutDemo } from "../Layout/Layout.Demo";
// import { Demo as LinkDemo } from "../Link/Link.Demo";
// import { Demo as TextDemo } from "../Text/Text.Demo";
// import {Demo as AlertDemo} from "../Alert/Alert.Demo"

// import {LandingPage} from "../../views/LandingPage";
import {NewAccount} from "../../views/NewAccount";
import {ResetPassword} from "../../views/ResetPassword";
import {SignIn} from "../../views/SignIn";
import { EmailSent } from "../../views/EmailSent";
import { General} from "./App.Routing.General"
import ItemsList from "../../views/ItemsList";
import UserSignIn from "../../views/userSignIn";
import UserSelect from "../../views/userSelect";


const Items = () => {
  return (
    <Switch>
      <Route path="/items/list">
        <ItemsList />
      </Route>
    </Switch>
  );
};

export const Routing = () => {
  const { loading, user } = useContext(authContext);

  if (loading) {
    return null;
  }
  return (
    <Switch>
      <Route path="/demo">
        <Demos />
      </Route>

      <Route path="/items">{user ? <Items /> : <Redirect to="/" />}</Route>
      <Route path="/sync">{user ? <SyncEmail /> : <Redirect to="/" />}</Route>

      <Route path="/auth">
        {user ? <Redirect to="/sync/check " /> : <Auth />}
      </Route>

      <Route path="/create">
        {user ? <Redirect to="/sync/check" /> : <Create />}
      </Route>

      <Route path="/sent">
        <EmailSent />
      </Route>

      <General user={user} />
    </Switch>
  );
};
export default Routing;





// const Demos = ()=>{
//   return (
//     <Switch>
//       <Route path="/demo/button">
//         <ButtonDemo />
//       </Route>

//       <Route path="/demo/checkbox">
//         <CheckboxDemo />
//       </Route>

//       <Route path="/demo/image">
//         <ImageDemo />
//       </Route>

//       <Route path="/demo/input">
//         <InputDemo />
//       </Route>

//       <Route path="/demo/layout">
//         <LayoutDemo />
//       </Route>

//       <Route path="/demo/link">
//         <LinkDemo />
//       </Route>

//       <Route path="/demo/text">
//         <TextDemo />
//       </Route>

//       <Route path="/demo/alert">
//         <AlertDemo />
//       </Route>
//     </Switch>
//   );
// }

// const Auth = ()=>{
//   return (
//     <Switch>
//       <Route path="/auth/register">
//         <NewAccount />
//       </Route>

//       <Route path="/auth/signin">
//         <SignIn />
//       </Route>

//       <Route path="/auth/reset">
//         <ResetPassword />
//       </Route>

//       <Route path="/auth/sent">
//         <EmailSent />
//       </Route>

//       <Route path="/auth/select">
//         <UserSelect />
//       </Route>

//       <Route path="/auth/auto">
//         <UserSignIn />
//       </Route>
//     </Switch>

    
//   );
// }

// import {LandingPage} from "../../views/general/LandingPage";
// import { EmailSent } from "../../views/general/EmailSent";
// import { ItemsList } from "../../views/ItemsList"

// const Items = () => {
//   return (
//     <Switch>
//       <Route path="/items/list">
//         <ItemsList />
//       </Route>
//       </Switch>
   
//   );
  


// import { General } from "./App.Routing.General";

// export const Routing = () => {
//   const { loading, user } = useContext(authContext);

//   if (loading){
//     return null;
//   }
//   return (
   
//       <Switch>
//         <Route path="/demos">
//           <Demos />
//         </Route>

//         <Route path="/items">
//           {user ? <Items /> :  <Redirect to="/" />}
//         </Route>

//         <Route path="/sync">
//           { user ? <Redirect to="/" /> : <Auth />}
//         </Route>

//         <Route path="/auth">
//           { user ? <Redirect to="/sync/check" /> : <Auth />}
//         </Route>

//         <Route path="/create">
//           { user ? <Redirect to="/sync/check" /> : <Create />}
//         </Route>

//         <Route path="/">
//         { user ? <Redirect to="/sync/check" /> : <LandingPage />}
//         </Route>


//         <General  />
//       </Switch>
    
//   );
// };
// export default Routing;








