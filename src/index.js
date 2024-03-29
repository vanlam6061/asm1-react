import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Wrapper from "./base/GlobalStyles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>
);
