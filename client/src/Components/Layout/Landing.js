import React from "react";
import Image from "react-bootstrap/Image";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/me" />;
  }
  return (
    <div>
      <Image
        src="/assets/img/slide-01.jpg"
        fluid
        style={{
          width: "100%",
          height: "auto"
        }}
      />
      <section id="banner" style={{ fontFamily: "Roboto" }}>
        <div className="block has-dark-background background-color-default-darker center text-banner">
          <div className="container">
            <h1 className="no-bottom-margin no-border">
              Emlakçılara Özel Portföy Paylaşım Platformu <br />
            </h1>
            <Link to="/login">
              <Button
                variant="outlined"
                color="primary"
                size="large"
                style={{ color: "white", margin: "10x" }}
              >
                Giriş Yap
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="outlined"
                color="primary"
                size="large"
                style={{ color: "white", margin: "10px" }}
              >
                Üye Ol
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <div id="page-content">
        <section id="our-services" className="block">
          <div className="container">
            <header className="section-title">
              <h2>Nasıl Çalışır ?</h2>
            </header>
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <div className="feature-box equal-height">
                  <figure className="icon">
                    <i className="fa fa-user-plus" />
                  </figure>
                  <aside className="description">
                    <header>
                      <h3>Üye Olun</h3>
                    </header>
                    <p>
                      <Link to="/register">Buraya</Link> tıklayın ve formu
                      doldurun. Üye olmak 5 saniye sürer. Üye olduktan sonra
                      kendinize bir profil oluşturun.
                    </p>
                  </aside>
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="feature-box equal-height">
                  <figure className="icon">
                    <i className="fa fa-list-ol" />
                  </figure>
                  <aside className="description">
                    <header>
                      <h3>İlanlarınızı Listeleyin</h3>
                    </header>
                    <p>
                      Portföyünüzdeki ilanları sisteme girin ve diğer
                      emlakçıların ilanlarını müşterilerinizin isteklerine göre
                      değerlendirin.{" "}
                    </p>
                  </aside>
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="feature-box equal-height">
                  <figure className="icon">
                    <i className="fa fa-handshake-o" />
                  </figure>
                  <aside className="description">
                    <header>
                      <h3>Anlaşmaya Varın</h3>
                    </header>
                    <p>
                      Uygun bir ilan bulunca portföy sahibi emlakçıya telefon
                      veya e-posta yoluyla ulaşın. Şartlarda anlaşma sağlanırsa
                      müşterinizi bilgilendirin.
                    </p>
                  </aside>
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="feature-box equal-height">
                  <figure className="icon">
                    <i className="fa fa-money" />
                  </figure>
                  <aside className="description">
                    <header>
                      <h3>Komisyonu Paylaşın</h3>
                    </header>
                    <p>
                      Satış veya kiralama gerçekleşirse komisyon bedelini
                      aranızda paylaşın.
                    </p>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
