import React from "react";
import { Link } from "react-router-dom";

const DefaultView = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={"/"}>
          <img
            src={process.env.PUBLIC_URL + "/img/grandstack.png"}
            className="App-logo"
            alt="logo"
          />
        </Link>

        <h1 className="App-title">Welcome!</h1>

        <nav className="App-nav">
          <Link to={"/u"} className="App-nav-link">
            Users
          </Link>
          <Link to={"/"} className="App-nav-link">
            Lots
          </Link>
        </nav>
      </header>

      {children}
    </div>
  );
};

export default DefaultView;
