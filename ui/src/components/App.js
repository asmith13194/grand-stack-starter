import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Router, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "../styles/App.css";
import Home from "../views/Home";
import Lot from "../views/Lot";
import LotAdd from "../views/LotAdd";
import User from "../views/User";
import Users from "../views/Users";

const history = createBrowserHistory();

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router history={history}>
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
            </header>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/l/:name/:id" component={Lot} />
              <Route exact path="/l/add" component={LotAdd} />
              <Route exact path="/u" component={Users} />
              <Route exact path="/u/:name" component={User} />
              <Route
                component={({ location }) => (
                  <div>
                    <h3>
                      No match for <code>{location.pathname}</code>
                    </h3>
                  </div>
                )}
              />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
