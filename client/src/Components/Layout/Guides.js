import React from "react";
import { Link } from "react-router-dom";

const Guides = () => {
  return (
    <aside id="our-guides">
      <header>
        <h3>Faydalı Bilgiler</h3>
      </header>
      <Link to="/how-it-works" className="universal-button">
        <figure className="fa fa-home" />
        <span>Nasıl Çalışır ?</span>
        <span className="arrow fa fa-angle-right" />
      </Link>
      <Link to="/faq" className="universal-button">
        <figure className="fa fa-umbrella" />
        <span>S.S.S</span>
        <span className="arrow fa fa-angle-right" />
      </Link>
    </aside>
  );
};

export default Guides;
