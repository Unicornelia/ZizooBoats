import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Router, Switch } from 'react-router-dom';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import client from "./apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import history from './history';

const Root = () => {
  return (
    <ErrorBoundary>
        <Router history={history}>
          <Switch>
            <Route exact path={'/search'} component={App} />
          </Switch>
        </Router>
    </ErrorBoundary>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
