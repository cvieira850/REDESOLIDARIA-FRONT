import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container, Footer } from 'mdbreact';
import { Login, Welcome } from "./panel";
import "./App.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Main from "./Main";

const App = () => (
    <Fragment>
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Main>
                        <Route exact path="/Welcome" component={Welcome} />
                    </Main>
                </Switch>
            </Router>
        </div>
    </Fragment>
);

export default App;
