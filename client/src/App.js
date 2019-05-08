import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navigation from "./Components/Layout/Navigation";
import Landing from "./Components/Layout/Landing";
import Footer from "./Components/Layout/Footer";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="wrapper">
        <Navigation />
        <Route exact path="/" component={Landing} />

        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
      <div id="overlay" />
    </Router>
  </Provider>
);

export default App;
