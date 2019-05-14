import React from "react";

const Grid = () => {
  return (
    <div>
      <div className="property">
        <a href="property-detail.html">
          <div className="property-image">
            <img alt="" src="assets/img/properties/property-09.jpg" />
          </div>
          <div className="overlay">
            <div className="info">
              <div className="tag price">$ 11,000</div>
              <h3>3398 Lodgeville Road</h3>
              <figure>Golden Valley, MN 55427</figure>
            </div>
            <ul className="additional-info">
              <li>
                <header>Area:</header>
                <figure>
                  240m<sup>2</sup>
                </figure>
              </li>
              <li>
                <header>Beds:</header>
                <figure>2</figure>
              </li>
              <li>
                <header>Baths:</header>
                <figure>2</figure>
              </li>
              <li>
                <header>Garages:</header>
                <figure>0</figure>
              </li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Grid;
