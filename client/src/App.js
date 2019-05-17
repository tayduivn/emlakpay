import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navigation from "./Components/Layout/Navigation";
import Landing from "./Components/Layout/Landing";
import Footer from "./Components/Layout/Footer";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Account from "./Components/Account/Account";
import Me from "./Components/Profile/Me";
import PrivateRoute from "./Components/Routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="wrapper">
          <Navigation />
          <Route exact path="/" component={Landing} />

          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/account" component={Account} />
            <PrivateRoute exact path="/me" component={Me} />
          </Switch>
          <Footer />
        </div>
        <div id="overlay" />
      </Router>
    </Provider>
  );
};

export default App;
