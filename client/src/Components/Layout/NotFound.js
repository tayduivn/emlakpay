import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div id="page-content">
      <div class="container">
        <ol class="breadcrumb">
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li class="active">Sayfa Bulunamadı</li>
        </ol>
      </div>

      <div class="container">
        <section id="404">
          <div class="error-page">
            <div class="title">
              <img
                alt=""
                src="assets/img/error-page-background.png"
                class="top"
              />
              <header>404</header>
              <img
                alt=""
                src="assets/img/error-page-background.png"
                class="bottom"
              />
            </div>
            <h2 class="no-border">Page not found</h2>
            <Link to="/" class="link-arrow back" onclick="history.back(-1)">
              Anasayfa
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
