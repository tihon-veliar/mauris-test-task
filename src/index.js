import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { ApplyTheme } from "rambler-ui/theme";

const app = (
  <ApplyTheme>
    <App style={{ padding: "0", margin: "0" }} />
  </ApplyTheme>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
