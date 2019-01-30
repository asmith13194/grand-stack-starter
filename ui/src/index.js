import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import registerServiceWorker from "./serviceworkers/registerServiceWorker";

const Main = () => <App />;

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
