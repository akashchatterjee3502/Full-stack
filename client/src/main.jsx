import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="akash-chatterjee.us.auth0.com"
      clientId="kvy9yANsxLgicMqc8P2tzC4VAAuYPIT6"
      authorizationParams={{
        redirect_uri: "https://homyz-real-estate-lemon.vercel.app",
      }}
      audience="https://homyz-real-estate-seven.vercel.app"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
