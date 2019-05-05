import React, { Fragment } from "react";
import "./bootstrap/css/bootstrap.css";
import "./css/bootstrap-select.min.css";
// import "./css/jquery.slider.min.css";
import "./css/App.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
const App = () => (
  <div className="wrapper">
    <Navigation />
    <Footer />
  </div>
);

export default App;
