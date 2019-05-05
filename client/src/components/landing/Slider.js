import React from "react";

const Slider = () => {
  return (
    <div id="slider" class="loading has-parallax">
      <div id="loading-icon">
        <i class="fa fa-cog fa-spin" />
      </div>
      <div class="owl-carousel homepage-slider carousel-full-width">
        <div class="slide">
          <div class="container">
            <div class="overlay">
              <div class="info">
                <div class="tag price">$ 11,000</div>
                <h3>3398 Lodgeville Road</h3>
                <figure>Golden Valley, MN 55427</figure>
              </div>
              <hr />
              <a href="property-detail.html" class="link-arrow">
                Read More
              </a>
            </div>
          </div>
          <img alt="" src="../../img/slide-01.jpg" />
        </div>
        <div class="slide">
          <div class="container">
            <div class="overlay">
              <div class="info">
                <div class="tag price">$ 16,000</div>
                <h3>987 Cantebury Drive</h3>
                <figure>Chicago, IL 60610</figure>
              </div>
              <hr />
              <a href="property-detail.html" class="link-arrow">
                Read More
              </a>
            </div>
          </div>
          <img alt="" src="../../img/slide-02.jpg" />
        </div>
        <div class="slide">
          <div class="container">
            <div class="overlay">
              <div class="info">
                <div class="tag price">$ 28,500</div>
                <h3>1866 Clement Street</h3>
                <figure>Atlanta, GA 30303</figure>
              </div>
              <hr />
              <a href="property-detail.html" class="link-arrow">
                Read More
              </a>
            </div>
          </div>
          <img alt="" src="../../img/slide-03.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
