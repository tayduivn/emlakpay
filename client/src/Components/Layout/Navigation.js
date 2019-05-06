import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="secondary-navigation">
        <div className="container">
          <div className="contact">
            <figure>
              <strong>Telefon:</strong>0(232) 765 77 66{" "}
            </figure>
            <figure>
              <strong>E-posta:</strong>destek@emlakpay.com
            </figure>
          </div>
          <div className="user-area">
            <div className="actions">
              <Link to="/register" className="promoted">
                <strong>Üye Ol</strong>
              </Link>
              <Link to="/login">Giriş Yap</Link>
            </div>
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
                <img src="assets/img/logo.png" alt="brand" />
              </Link>
            </div>
          </div>
          <nav
            className="collapse navbar-collapse bs-navbar-collapse navbar-right"
            role="navigation"
          >
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/">Anasayfa</Link>
              </li>
              <li className="has-child">
                <Link to="/listings">İlanlar</Link>
                <ul className="child-navigation">
                  <li>
                    <Link to="properties-listing.html">İlan Ekle</Link>
                  </li>
                  <li>
                    <Link to="properties-listing-grid.html">İlanlarım</Link>
                  </li>
                  <li>
                    <Link to="properties-listing-lines.html">
                      Favori İlanlarım
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-child">
                <Link to="/reqs">Emlak Talepleri</Link>
                <ul className="child-navigation">
                  <li>
                    <Link to="properties-listing.html">Talep Ekle</Link>
                  </li>
                  <li>
                    <Link to="properties-listing-grid.html">Taleplerim</Link>
                  </li>
                  <li>
                    <Link to="properties-listing-lines.html">
                      Favori Taleplerim
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">Profilim</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="/contact">İletişim</Link>
              </li>
            </ul>
          </nav>
          <div className="add-your-property">
            <Link to="submit.html" className="btn btn-default">
              <i className="fa fa-plus" />
              <span className="text">İlan Ekleyin</span>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navigation;
