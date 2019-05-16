import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { ApplyTheme } from "rambler-ui/theme";

const app = (
  <ApplyTheme>
    <App />
  </ApplyTheme>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
