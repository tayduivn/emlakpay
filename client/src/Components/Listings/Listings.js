import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getListings } from "../../actions/listing";
import Loading from "../Layout/Loading";
import ListingItem from "./ListingItem";
import SimpleSelect from "react-select";
import SearchListingVertical from "../Layout/SearchListingVertical";
import { Link } from "react-router-dom";

const Listings = ({ getListings, listing: { listings, loading } }) => {
  useEffect(() => {
    getListings();
  }, [getListings]);
  return loading ? (
    <Loading />
  ) : (
    <div id="page-content">
      <div className="container">
        <ol className="breadcrumb">
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li className="active">İlanlar</li>
        </ol>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-9">
            <section id="results">
              <header>
                <h1>İlanlar</h1>
              </header>
              <section id="search-filter">
                <figure>
                  <h3>
                    <i className="fa fa-search" />
                    Bulunan:
                  </h3>
                  <span className="search-count">{listings.length} İlan</span>
                  <div className="sorting">
                    <div className="form-group">
                      <SimpleSelect
                        placeholder="Sırala"
                        options={[
                          { value: "chocolate", label: "Chocolate" },
                          { value: "strawberry", label: "Strawberry" },
                          { value: "vanilla", label: "Vanilla" }
                        ]}
                      />
                    </div>
                  </div>
                </figure>
              </section>
              <section id="properties">
                <div className="row">
                  {listings.length > 0 ? (
                    listings.map(listing => (
                      <div className="col-md-4 col-sm-4" key={listing._id}>
                        <ListingItem listing={listing} key={listing._id} />
                      </div>
                    ))
                  ) : (
                    <div className="col-md-4 col-sm-4">
                      <h3> İlan Bulunamadı </h3>
                    </div>
                  )}
                </div>
                <section id="advertising">
                  <Link to="/new-listing">
                    <div className="banner">
                      <div className="wrapper">
                        <span className="title">
                          Portföyünüzü listelemek ister misiniz?
                        </span>
                        <span className="submit">
                          Hemen ekleyin! <i className="fa fa-plus-square" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </section>
              </section>
            </section>
          </div>

          <div className="col-md-3 col-sm-3">
            <SearchListingVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

Listings.propTypes = {
  getListings: PropTypes.func.isRequired,
  listing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  listing: state.listing
});

export default connect(
  mapStateToProps,
  { getListings }
)(Listings);
