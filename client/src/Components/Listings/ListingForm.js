import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addListing } from "../../actions/listing";
import { Link } from "react-router-dom";
import SimpleSelect from "../Layout/SimpleSelect";
import LocationSelector from "../Layout/LocationSelector";

const ListingForm = ({ addListing }) => {
  const [formData, setFormData] = useState({
    title: "",
    brief: "",
    location: {},
    price: "",
    propertyType: "",
    propertyStatus: "",
    grossm2: "",
    netm2: "",
    roomCount: "",
    loungeCount: "",
    bathroomCount: "",
    age: "",
    floor: "",
    totalFloor: "",
    heating: "",
    balcony: "",
    furnished: "",
    inSite: "",
    usageStatus: "",
    dues: "",
    swap: "",
    side: ""
  });

  const {
    title,
    brief,
    location,
    price,
    propertyType,
    propertyStatus,
    grossm2,
    netm2,
    roomCount,
    loungeCount,
    bathroomCount,
    age,
    floor,
    totalFloor,
    heating,
    balcony,
    furnished,
    inSite,
    usageStatus,
    dues,
    swap,
    side
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addListing(formData);
  };

  return (
    <Fragment>
      <div id="page-content">
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/new-listing" className="active">
                İlan Ekle
              </Link>
            </li>
          </ol>
        </div>

        <div className="container">
          <header>
            <h1>İlan Ekle</h1>
          </header>

          <form
            id="form-submit"
            className="form-submit"
            action="thank-you.html"
          >
            <div className="row">
              <div className="block">
                <section id="submit-form">
                  <div className="col-md-9">
                    <section id="basic-information">
                      <header>
                        <h2>Basic Information</h2>
                      </header>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="form-group">
                            <label htmlFor="submit-title">Title</label>
                            <input
                              type="text"
                              className="form-control"
                              id="submit-title"
                              name="title"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="submit-price">Price</label>
                            <div className="input-group">
                              <span className="input-group-addon">$</span>
                              <input
                                type="text"
                                className="form-control"
                                id="submit-price"
                                name="price"
                                pattern="\d*"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="submit-description">Description</label>
                        <textarea
                          className="form-control"
                          id="submit-description"
                          rows="8"
                          name="submit-description"
                          required
                        />
                      </div>
                    </section>
                  </div>

                  <div className="col-md-3">
                    <section id="summary">
                      <header>
                        <h2>Summary</h2>
                      </header>

                      <div className="row">
                        <LocationSelector />
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="submit-property-type">
                              Property Type
                            </label>
                            <select name="type" id="submit-property-type">
                              <option value="1">Apartment</option>
                              <option value="2">Condominium</option>
                              <option value="3">Cottage</option>
                              <option value="4">Flat</option>
                              <option value="5">House</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="submit-status">Status</label>
                            <select name="type" id="submit-status">
                              <option value="1">Sale</option>
                              <option value="2">Rent</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="submit-Beds">Beds</label>
                            <input
                              type="text"
                              className="form-control"
                              id="submit-Beds"
                              name="Beds"
                              pattern="\d*"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="submit-Baths">Baths</label>
                            <input
                              type="text"
                              className="form-control"
                              id="submit-Baths"
                              name="Baths"
                              pattern="\d*"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="submit-area">Area</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="submit-area"
                                name="area"
                                pattern="\d*"
                                required
                              />
                              <span className="input-group-addon">
                                m<sup>2</sup>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="submit-garages">Garages</label>
                            <input
                              type="text"
                              className="form-control"
                              id="submit-garages"
                              name="garages"
                              pattern="\d*"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <hr />
                </section>
              </div>

              <div className="col-md-12 col-sm-12">
                <div className="center">
                  <div className="form-group">
                    <button type="submit" className="btn btn-default large">
                      Proceed to Payment
                    </button>
                  </div>
                  <figure className="note block">
                    By clicking the “Proceed to Payment” or “Submit” button you
                    agree with our{" "}
                    <a href="terms-conditions.html">Terms and conditions</a>
                  </figure>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

ListingForm.propTypes = {
  addListing: PropTypes.func.isRequired
};

export default connect(
  null,
  { addListing }
)(ListingForm);
