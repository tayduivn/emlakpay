import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getListingById } from "../../actions/listing";
import { favListing } from "../../actions/listing";
import { loadUser } from "../../actions/auth";
import Loading from "../Layout/Loading";
import { Link } from "react-router-dom";

const Listing = ({
  getListingById,
  favListing,
  loadUser,
  listing: { listing, loading },
  match,
  auth
}) => {
  useEffect(() => {
    getListingById(match.params.id);
    loadUser();
  }, [getListingById, match.params.id, loadUser]);

  if (listing) {
    let {
      _id,
      title,
      brief,
      location,
      price,
      listingDate,
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
      side,
      img,
      favedBy
    } = listing;
    return loading ? (
      <Loading />
    ) : (
      <div id="page-content">
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <Link to="/"> Anasayfa </Link>
            </li>
            <li className="active">{title}</li>
          </ol>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-9">
              <section id="property-detail">
                <header className="property-title">
                  <h1>{title}</h1>
                  <figure>
                    {location.neighborhood}, {location.district},{" "}
                    {location.province}
                  </figure>
                  <span className="actions">
                    <a
                      href="#"
                      className={
                        auth &&
                        auth.user &&
                        favedBy.indexOf(auth.user._id) !== -1
                          ? "bookmark bookmark-added"
                          : "bookmark"
                      }
                      onClick={() => favListing(_id)}
                    >
                      <span className="title-add">Favorilere Ekle</span>
                      <span className="title-added">Eklendi</span>
                    </a>
                  </span>
                </header>
                <section id="property-gallery" />
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <section id="description">
                      {brief ? (
                        <div>
                          <header>
                            <h2>İlan Açıklaması</h2>
                          </header>
                          <p>{brief}</p>
                        </div>
                      ) : (
                        <p />
                      )}
                    </section>
                    <section id="property-features">
                      <header>
                        <h2>Property Description</h2>
                      </header>
                      <ul className="list-unstyled property-features-list">
                        <li>Sauna</li>
                        <li>Fireplace or fire pit</li>
                        <li>Outdoor Kitchen</li>
                        <li>Tennis Courts</li>
                        <li>Trees and Landscaping</li>
                        <li>Sun Room</li>
                        <li>Family Room</li>
                        <li>Concrete Flooring</li>
                      </ul>
                    </section>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <section id="contact-agent">
                      <header>
                        <h2>Contact Agent</h2>
                      </header>

                      <section className="agent-form">
                        <aside className="agent-info clearfix">
                          <figure>
                            <a href="agent-detail.html">
                              <img alt="" src="/assets/img/agent-01.jpg" />
                            </a>
                          </figure>
                          <div className="agent-contact-info">
                            <h3>Robert Farley</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Cras et dui vestibulum, bibendum purus sit
                              amet, vulputate mauris. Ut adipiscing gravida
                              tincidunt. Duis euismod placerat rhoncus.
                            </p>
                            <dl>
                              <dt>Phone:</dt>
                              <dd>(123) 456 789</dd>
                              <dt>Mobile:</dt>
                              <dd>888 123 456 789</dd>
                              <dt>Email:</dt>
                              <dd>
                                <a href="mailto:#">john.doe@example.com</a>
                              </dd>
                              <dt>Skype:</dt>
                              <dd>john.doe</dd>
                            </dl>
                            <hr />
                            <a href="agent-detail.html" className="link-arrow">
                              Full Profile
                            </a>
                          </div>
                        </aside>
                      </section>
                    </section>
                    <hr className="thick" />
                  </div>
                </div>
              </section>
            </div>

            <div className="col-md-3 col-sm-12">
              <section id="quick-summary" className="clearfix">
                <header>
                  <h2>Quick Summary</h2>
                </header>
                <dl>
                  <dt>Location</dt>
                  <dd>Chicago, IL 60610</dd>
                  <dt>Price</dt>
                  <dd>
                    <span className="tag price">$78,000</span>
                  </dd>
                  <dt>Property Type:</dt>
                  <dd>House</dd>
                  <dt>Status:</dt>
                  <dd>Sale</dd>
                  <dt>Area:</dt>
                  <dd>
                    860 m<sup>2</sup>
                  </dd>
                  <dt>Beds:</dt>
                  <dd>3</dd>
                  <dt>Baths:</dt>
                  <dd>2</dd>
                  <dt>Garages:</dt>
                  <dd>2</dd>
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

Listing.propTypes = {
  getListingById: PropTypes.func.isRequired,
  favListing: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  listing: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  listing: state.listing,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getListingById, favListing, loadUser }
)(Listing);
