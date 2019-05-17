import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";
import Loading from "../Layout/Loading";
const Account = ({ getCurrentProfile, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading ? (
    <div className="loading">
      <Loading />
    </div>
  ) : (
    <div id="page-content">
      <div className="container">
        <ol className="breadcrumb">
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/account" className="active">
              Hesabım
            </Link>
          </li>
        </ol>
      </div>
      <div className="container">
        <section id="profile">
          <header>
            <h1>Hesabım</h1>
          </header>
          <div className="account-profile">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <img alt="" className="image" src={profile && profile.avatar} />
              </div>
              <div className="col-md-9 col-sm-9">
                <form id="form-account-profile" method="post">
                  <section id="contact">
                    <h3>İletişim</h3>
                    <dl className="contact-fields">
                      <dt>
                        <label for="form-account-name">İsim:</label>
                      </dt>
                      <dd>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="form-account-name"
                            name="form-account-name"
                            required
                            value={profile && profile.name}
                          />
                        </div>
                      </dd>
                      <dt>
                        <label for="form-account-name">Soy isim:</label>
                      </dt>
                      <dd>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="form-account-name"
                            name="form-account-name"
                            required
                            value={profile && profile.surname}
                          />
                        </div>
                      </dd>
                      <dt>
                        <label for="form-account-name">Emlak Ofisi:</label>
                      </dt>
                      <dd>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="form-account-name"
                            name="form-account-name"
                            required
                            value={profile && profile.company}
                          />
                        </div>
                      </dd>
                      <dt>
                        <label for="form-account-phone">İletişim No:</label>
                      </dt>
                      <dd>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="form-account-phone"
                            name="form-account-phone"
                            value={profile && profile.phoneNo}
                          />
                        </div>
                      </dd>
                      <dt>
                        <label for="form-account-email">E-posta:</label>
                      </dt>
                      <dd>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="form-account-email"
                            name="form-account-email"
                            value={profile && profile.email}
                          />
                        </div>
                      </dd>
                    </dl>
                  </section>
                  <section id="about-me">
                    <h3>Hakkımda</h3>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="form-contact-agent-message"
                        rows="5"
                        name="form-contact-agent-message"
                      >
                        {profile && profile.bio}
                      </textarea>
                    </div>
                  </section>
                  <section id="social">
                    <h3>Sosyal Ağlar</h3>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-linkedin" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="account-social-linkedin"
                          name="account-social-linkedin"
                          value={profile && profile.social.linkedin}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-facebook" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="account-social-facebook"
                          name="account-social-facebook"
                          value={profile && profile.social.facebook}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-twitter" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="account-social-twitter"
                          name="account-social-twitter"
                          value={profile && profile.social.twitter}
                        />
                      </div>
                    </div>
                    <div className="form-group clearfix">
                      <button
                        type="submit"
                        className="btn pull-right btn-default"
                        id="account-submit"
                      >
                        Kaydet
                      </button>
                    </div>
                  </section>
                </form>
                <section id="change-password">
                  <header>
                    <h2>Şifremi Değiştir</h2>
                  </header>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <form id="form-account-password" method="post">
                        <div className="form-group">
                          <label for="form-account-password-current">
                            Şifreniz
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="form-account-password-current"
                            name="form-account-password-current"
                          />
                        </div>
                        <div className="form-group">
                          <label for="form-account-password-new">
                            Yeni Şifre
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="form-account-password-new"
                            name="form-account-password-new"
                          />
                        </div>
                        <div className="form-group">
                          <label for="form-account-password-confirm-new">
                            Yeni Şifre (Tekrar)
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="form-account-password-confirm-new"
                            name="form-account-password-confirm-new"
                          />
                        </div>
                        <div className="form-group clearfix">
                          <button
                            type="submit"
                            className="btn btn-default"
                            id="form-account-password-submit"
                          >
                            Kaydet
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <strong>Hint:</strong>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras et dui vestibulum, bibendum purus sit amet,
                        vulputate mauris.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

Account.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Account);
