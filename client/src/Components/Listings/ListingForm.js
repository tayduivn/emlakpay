import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addListing } from "../../actions/listing";
import { Link } from "react-router-dom";
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

        <div class="container">
          <header>
            <h1>Add Your Property</h1>
          </header>

          <form id="form-submit" class="form-submit" action="thank-you.html">
            <div class="row">
              <div class="block">
                <section id="submit-form">
                  <section id="basic-information">
                    <header>
                      <h2>Basic Information</h2>
                    </header>
                    <div class="row">
                      <div class="col-md-8">
                        <div class="form-group">
                          <label for="submit-title">Title</label>
                          <input
                            type="text"
                            class="form-control"
                            id="submit-title"
                            name="title"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="submit-price">Price</label>
                          <div class="input-group">
                            <span class="input-group-addon">$</span>
                            <input
                              type="text"
                              class="form-control"
                              id="submit-price"
                              name="price"
                              pattern="\d*"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="submit-description">Description</label>
                      <textarea
                        class="form-control"
                        id="submit-description"
                        rows="8"
                        name="submit-description"
                        required
                      />
                    </div>
                  </section>

                  <section>
                    <div class="row">
                      <div class="block clearfix">
                        <div class="col-md-3 col-sm-3">
                          <section id="summary">
                            <header>
                              <h2>Summary</h2>
                            </header>
                            <div class="form-group">
                              <label for="submit-location">Location</label>
                              <select name="type" id="submit-location">
                                <option value="1">New York</option>
                                <option value="2">Los Angeles</option>
                                <option value="3">Chicago</option>
                                <option value="4">Houston</option>
                                <option value="5">Philadelphia</option>
                              </select>
                            </div>
                            <div class="row">
                              <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                  <label for="submit-property-type">
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
                              <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                  <label for="submit-status">Status</label>
                                  <select name="type" id="submit-status">
                                    <option value="1">Sale</option>
                                    <option value="2">Rent</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                  <label for="submit-Beds">Beds</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="submit-Beds"
                                    name="Beds"
                                    pattern="\d*"
                                    required
                                  />
                                </div>
                              </div>
                              <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                  <label for="submit-Baths">Baths</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="submit-Baths"
                                    name="Baths"
                                    pattern="\d*"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                  <label for="submit-area">Area</label>
                                  <div class="input-group">
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="submit-area"
                                      name="area"
                                      pattern="\d*"
                                      required
                                    />
                                    <span class="input-group-addon">
                                      m<sup>2</sup>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                  <label for="submit-garages">Garages</label>
                                  <input
                                    type="text"
                                    class="form-control"
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
                      </div>
                    </div>
                  </section>

                  <section class="block" id="gallery">
                    <header>
                      <h2>Gallery</h2>
                    </header>
                    <div class="center">
                      <div class="form-group">
                        <input
                          id="file-upload"
                          type="file"
                          class="file"
                          multiple="true"
                          data-show-upload="false"
                          data-show-caption="false"
                          data-show-remove="false"
                          accept="image/jpeg,image/png"
                          data-browse-class="btn btn-default"
                          data-browse-label="Browse Images"
                        />
                        <figure class="note">
                          <strong>Hint:</strong> You can upload all images at
                          once!
                        </figure>
                      </div>
                    </div>
                  </section>

                  <hr />
                </section>
              </div>

              <div class="block">
                <div class="col-md-9 col-sm-9">
                  <div class="center">
                    <div class="form-group">
                      <button type="submit" class="btn btn-default large">
                        Proceed to Payment
                      </button>
                    </div>
                    <figure class="note block">
                      By clicking the “Proceed to Payment” or “Submit” button
                      you agree with our{" "}
                      <a href="terms-conditions.html">Terms and conditions</a>
                    </figure>
                  </div>
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
