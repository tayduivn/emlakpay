import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };
  //Redirect if LoggedIn
  if (isAuthenticated) {
    return <Redirect to="/me" />;
  }

  return (
    <div id="page-content">
      <div className="container">
        <ol className="breadcrumb">
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li className="active">Giriş Yap</li>
        </ol>
      </div>
      <div className="container">
        <header>
          <h1>Giriş Yap</h1>
        </header>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
            <form id="form-create-account" onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <label htmlFor="form-create-account-email">E-posta:</label>
                <input
                  type="email"
                  className="form-control"
                  id="form-create-account-email"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-create-account-password">Şifre:</label>
                <input
                  type="password"
                  className="form-control"
                  id="form-create-account-password"
                  name="password"
                  value={password}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group clearfix">
                <button
                  type="submit"
                  className="btn pull-right btn-default"
                  id="account-submit"
                >
                  Giriş Yap
                </button>
              </div>
            </form>
            <hr />
            <div className="center">
              <Link to="/forgot">Şifremi Unuttum</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
