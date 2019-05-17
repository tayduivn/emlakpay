import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";
import Loading from "../Layout/Loading";
import { createProfile } from "../../actions/profile";
import Alert from "../Layout/Alert";
import { setAlert } from "../../actions/alert";
const Account = ({
  setAlert,
  createProfile,
  history,
  getCurrentProfile,
  profile: { profile, loading }
}) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    company: "",
    bio: "",
    phoneNo: "",
    email: "",
    avatar: "",
    linkedin: "",
    facebook: "",
    twitter: ""
  });
  const {
    name,
    surname,
    company,
    phoneNo,
    bio,
    email,
    avatar,
    linkedin,
    facebook,
    twitter
  } = formData;
  const onChange = e => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
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
                <img
                  alt=""
                  className="image"
                  src={
                    profile && profile.avatar != null
                      ? profile.avatar
                      : "assets/img/agent-01.jpg"
                  }
                />
              </div>

              <div className="col-md-9 col-sm-9">
                <form id="form-account-profile" onSubmit={e => onSubmit(e)}>
                  <section id="contact">
                    <h3>İletişim</h3>
                    <dl className="contact-fields">
                      <dt>
                        <label htmlFor="form-account-name">İsim:</label>
                      </dt>
                      <dd>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="form-account-name"
                            name="name"
                            value={name}
                            onChange={e => onChange(e)}
                          />
                        </div>
                      </dd>
                      <dt>
                        <label htmlFor="form-account-surname">Soy isim:</label>
                      </dt>
                      <dd>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="form-account-surname"
                            name="surname"
                            value={surname}
                            onChange={e => onChange(e)}
                          />
                        </div>
                      </dd>
                      <dt>
                        <label htmlFor="form-account-comp">Emlak Ofisi:</label>
                      </dt>
                      <dd>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="form-account-comp"
                            name="company"
                            value={company}
                            onChange={e => onChange(e)}
                          />
                        </div>
                      </dd>
                      <dt>
                        <label htmlFor="form-account-phone">İletişim No:</label>
                      </dt>
                      <dd>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="form-account-phone"
                            name="phoneNo"
                            value={phoneNo}
                            onChange={e => onChange(e)}
                          />
                        </div>
                      </dd>
                      <dt>
                        <label htmlFor="form-account-email">E-posta:</label>
                      </dt>
                      <dd>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="form-account-email"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
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
                        name="bio"
                        onChange={e => onChange(e)}
                        value={bio}
                      />
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
                          name="linkedin"
                          value={linkedin}
                          onChange={e => onChange(e)}
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
                          name="facebook"
                          value={facebook}
                          onChange={e => onChange(e)}
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
                          name="twitter"
                          value={twitter}
                          onChange={e => onChange(e)}
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
                <Alert />
                <section id="change-password">
                  <header>
                    <h2>Şifremi Değiştir</h2>
                  </header>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <form id="form-account-password" method="post">
                        <div className="form-group">
                          <label htmlFor="form-account-password-current">
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
                          <label htmlFor="form-account-password-new">
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
                          <label htmlFor="form-account-password-confirm-new">
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
  profile: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, createProfile, setAlert }
)(withRouter(Account));
