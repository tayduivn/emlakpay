import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="actions">
      <Link to="/account">
        <strong>
          <i className="fa fa-cogs" aria-hidden="true" /> Hesabım
        </strong>
      </Link>
      <Link to="/logout" className="promoted" onClick={logout}>
        <strong>
          <i className="fa fa-sign-out" aria-hidden="true" />
          Çıkış
        </strong>
      </Link>
    </div>
  );
  const authMidLinks = (
    <ul className="nav navbar-nav">
      <li className="has-child">
        <Link to="#">İlanlar</Link>
        <ul className="child-navigation">
          <li>
            <Link to="/listings">Tüm İlanlar</Link>
          </li>
          <li>
            <Link to="/new-listing">İlan Ekle</Link>
          </li>
          <li>
            <Link to="/my-listings">İlanlarım</Link>
          </li>
          <li>
            <Link to="/my-favs">Favori İlanlarım</Link>
          </li>
        </ul>
      </li>
      <li className="has-child">
        <Link to="#">Profiller</Link>
        <ul className="child-navigation">
          <li>
            <Link to="/profiles">Tüm Profiller</Link>
          </li>
          <li>
            <Link to="/me">Profilim</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/pricing">Fiyatlandırma</Link>
      </li>

      <li>
        <Link to="/contact">İletişim</Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <div className="actions">
      <Link to="/register" className="promoted">
        <strong>Üye Ol</strong>
      </Link>
      <Link to="/login">Giriş Yap</Link>
    </div>
  );

  const guestMidLinks = (
    <ul className="nav navbar-nav">
      <li>
        <Link to="/">Anasayfa</Link>
      </li>

      <li>
        <Link to="/contact">İletişim</Link>
      </li>
    </ul>
  );

  return (
    <div className="navigation" id="page-top">
      <div className="secondary-navigation">
        <div className="container">
          <div className="contact">
            <figure>
              <strong>Telefon:</strong>0(232) 765 77 66{" "}
            </figure>
            <figure>
              <strong>E-posta:</strong>selam@emlakpay.com
            </figure>
          </div>
          <div className="user-area">
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <header className="navbar" id="top" role="banner">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target=".bs-navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="navbar-brand nav" id="brand">
              <Link to="/">
                <img src="/assets/img/logo.png" alt="brand" />
              </Link>
            </div>
          </div>
          <nav
            className="collapse navbar-collapse bs-navbar-collapse navbar-right"
            role="navigation"
          >
            {!loading && (
              <Fragment>
                {isAuthenticated ? authMidLinks : guestMidLinks}
              </Fragment>
            )}
          </nav>
          <div className="add-your-property">
            <Link to="/new-listing" className="btn btn-default">
              <i className="fa fa-plus" />
              <span className="text">İlan Ekleyin</span>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navigation);
