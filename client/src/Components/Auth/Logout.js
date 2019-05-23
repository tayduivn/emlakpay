import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Logout = ({ isAuthenticated }) => {
  //Redirect if LoggedIn
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return <Fragment />;
};

Logout.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Logout);
