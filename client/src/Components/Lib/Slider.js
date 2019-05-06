import React from 'react'

const Slider = () => {
  return (
    <div id="slider" className="loading has-parallax">
        <div id="loading-icon"><i className="fa fa-cog fa-spin"></i></div>
        <div className="owl-carousel homepage-slider carousel-full-width">
            <div className="slide">
                <div className="container">
                    <div className="overlay">
                        <div className="info">
                            <div className="tag price">Emlakpay.com</div>
                            <h3>Emlakçılara özel portföy paylaşım sitesi</h3>
                        </div>
                        <hr/>
                        <a href="property-detail.html" className="link-arrow">Read More</a>
                    </div>
                </div>
                <img alt="" src="assets/img/slide-01.jpg"/>
            </div>
            <div className="slide">
                <div className="container">
                    <div className="overlay">
                        <div className="info">
                            <div className="tag price">$ 16,000</div>
                            <h3>987 Cantebury Drive</h3>
                            <figure>Chicago, IL 60610</figure>
                        </div>
                        <hr/>
                        <a href="property-detail.html" className="link-arrow">Read More</a>
                    </div>
                </div>
                <img alt="" src="assets/img/slide-02.jpg" />
            </div>
            <div className="slide">
                <div className="container">
                    <div className="overlay">
                        <div className="info">
                            <div className="tag price">$ 28,500</div>
                            <h3>1866 Clement Street</h3>
                            <figure>Atlanta, GA 30303</figure>
                        </div>
                        <hr/>
                        <a href="property-detail.html" className="link-arrow">Read More</a>
                    </div>
                </div>
                <img alt="" src="assets/img/slide-03.jpg" />
            </div>
        </div>
    </div>
  )
}

export default Slider
