import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Router, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "../styles/App.css";
import Home from "./LotList";
import Lot from "./LotCard";
import LotAdd from "./LotAddForm";
import User from "./UserCard";
import Users from "./UserList";

const history = createBrowserHistory();

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router history={history}>
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
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
