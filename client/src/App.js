import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navigation from "./Components/Layout/Navigation";
import Landing from "./Components/Layout/Landing";
import Footer from "./Components/Layout/Footer";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Logout from "./Components/Auth/Logout";
import Account from "./Components/Account/Account";
import Me from "./Components/Profile/Me";
import Profiles from "./Components/Profiles/Profiles";
import Profile from "./Components/Profile/Profile";
import PrivateRoute from "./Components/Routing/PrivateRoute";
import Listings from "./Components/Listings/Listings";
import MyListings from "./Components/Listings/MyListings";
import MyFavs from "./Components/Listings/MyFavs";
import Listing from "./Components/Listing/Listing";
import ListingForm from "./Components/Listings/ListingForm";
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
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <PrivateRoute exact path="/me" component={Me} />
            <PrivateRoute exact path="/account" component={Account} />
            <PrivateRoute exact path="/profiles" component={Profiles} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/listings" component={Listings} />
            <PrivateRoute exact path="/my-listings" component={MyListings} />
            <PrivateRoute exact path="/my-favs" component={MyFavs} />
            <PrivateRoute exact path="/listing/:id" component={Listing} />
            <PrivateRoute exact path="/new-listing" component={ListingForm} />
          </Switch>
          <Footer />
        </div>
        <div id="overlay" />
      </Router>
    </Provider>
  );
};

export default App;
