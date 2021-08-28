import React from "react";
import { createGlobalStyle } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import { Routing } from "./App.Routing";
import { Provider as AuthProvider } from "../../hooks/useAuth";

const fireAlert = (registration) => {
  registration.showNotification("Hi there!", {
    body: "This is a description with more details",
    badge: "https://new-eazy-apply.netlify.app/meta/camera.png",
    icon: "https://new-eazy-apply.netlify.app/meta/camera.png",
    image: "https://new-eazy-apply.netlify.app/meta/cover-image.jpeg",
    action: [
      {
        actions: "add",
        tittle: "Add",
      },
      {
        actions: "view",
        tittle: "view",
      },
    ],
  });
};

const getRegistration = async () => {
  const registration = await navigator.serviceWorker.getRegistration();

  if (Notification.permission === "granted") {
    fireAlert(registration);
  }

  if (Notification.permission === "default") {
    Notification.requestPermission(() => fireAlert(registration));
  }
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
  getRegistration();
}

const Global = createGlobalStyle`
@font-face {
  font-family: "Roboto";
  src: url("/fonts/400.ttf") format('truetype');
  font-weight: 400;
  font-style: "normal";
}
@font-face {
  font-family: "Roboto";
  src: url("/fonts/500.ttf") format('truetype');
  font-weight: 500;
  font-style: "normal";
}
@font-face {
  font-family: "Roboto";
  src: url("/fonts/700.ttf") format('truetype');
  font-weight: 700;
  font-style: "normal";
}
@font-face {
  font-family: "Roboto";
  src: url("/fonts/900.ttf") format('truetype');
  font-weight: 900;
  font-style: "normal";
}
html {
  height: 100%;
}
body {
  overflow-x: hidden;
  overflow-y: scroll;
  min-height: 100vh;
  background: white;
}
`;

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Global />

      <AuthProvider>
        <HashRouter>
          <Routing />
        </HashRouter>
      </AuthProvider>
    </StylesProvider>
  );
};

export default App;