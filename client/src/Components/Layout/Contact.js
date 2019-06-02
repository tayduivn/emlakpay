import React, { useState } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Contact = ({ setAlert, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: ""
  });

  const onChange = e => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async (formData, history) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      await axios.post("/api/contact", formData, config);
      setAlert("Mesajınız başarıyla gönderildi.", "success");
      history.push("/");
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(e => setAlert(e.msg, "danger"));
      }
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    sendMessage(formData, history);
  };

  return (
    <div className="container">
      <div className="container">
        <ol className="breadcrumb">
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li className="active">İletişim</li>
        </ol>
      </div>
      <div className="container">
        <section id="agent-detail">
          <header>
            <h1>İletişim</h1>
          </header>
          <div className="row">
            <div className="col-md-4 col-sm-5">
              <section id="contact-information">
                <section id="address">
                  <header>
                    <h3>Adres</h3>
                  </header>
                  <address>
                    <strong>Tekent Bilişim A.Ş</strong>
                    <br />
                    Teknopark İzmir A3 Binası No:32
                    <br />
                    Urla/İzmir
                  </address>
                  0(232) 765 77 66
                  <br />
                  <a href="mailto:selam@emlakpay.com">selam@emlakpay.com</a>
                  <br />
                </section>
                <hr />
                <section id="social">
                  <div className="agent-social">
                    <a href="#" className="fa fa-twitter btn btn-grey-dark" />
                    <a href="#" className="fa fa-facebook btn btn-grey-dark" />
                    <a href="#" className="fa fa-linkedin btn btn-grey-dark" />
                  </div>
                </section>
              </section>
            </div>
            <div className="col-md-8 col-sm-7">
              <section id="form">
                <header>
                  <h3>Mesaj Gönderin</h3>
                </header>
                <form
                  onSubmit={e => onSubmit(e)}
                  id="form-contact"
                  className="clearfix"
                >
                  <div className="form-group">
                    <label htmlFor="form-contact-name">
                      İsminiz<em>*</em>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="form-contact-name"
                      name="name"
                      onChange={e => onChange(e)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-contact-email">
                      Email Adresiniz<em>*</em>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="form-contact-email"
                      name="email"
                      onChange={e => onChange(e)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-contact-message">
                      Mesajınız<em>*</em>
                    </label>
                    <textarea
                      className="form-control"
                      id="form-contact-message"
                      rows="8"
                      name="msg"
                      onChange={e => onChange(e)}
                    />
                  </div>

                  <div className="form-group clearfix">
                    <button
                      type="submit"
                      className="btn pull-right btn-default"
                      id="form-contact-submit"
                    >
                      Gönder
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

Contact.propTypes = {
  setAlert: PropTypes.func.isRequired
};
export default connect(
  null,
  { setAlert }
)(withRouter(Contact));
