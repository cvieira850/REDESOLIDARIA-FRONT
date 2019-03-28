import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container, Footer } from 'mdbreact';
import { Login, Welcome, Market } from "./panel";
import "./App.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Main from "./Main";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./store/store.js";

const App = () => (
    <Fragment>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Main>
                                <Route
                                    exact
                                    path="/Welcome"
                                    component={Welcome}
                                />
                                <Route
                                    exact
                                    path="/Market"
                                    component={Market}
                                />
                            </Main>
                        </Switch>
                    </Router>
                </div>
            </PersistGate>
        </Provider>
    </Fragment>
);

export default App;
