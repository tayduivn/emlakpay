import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div id="page-content">
      <div className="container">
        <ol className="breadcrumb">
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li className="active">Sayfa Bulunamadı</li>
        </ol>
      </div>

      <div className="container">
        <section id="404">
          <div className="error-page">
            <div className="title">
              <img
                alt=""
                src="assets/img/error-page-background.png"
                className="top"
              />
              <header>404</header>
              <img
                alt=""
                src="assets/img/error-page-background.png"
                className="bottom"
              />
            </div>
            <h2 className="no-border">Page not found</h2>
            <Link to="/" className="link-arrow back" onclick="history.back(-1)">
              Anasayfa
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
