import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../Layout/Loading";
import ListingItem from "./ListingItem";
import SimpleSelect from "../Layout/SimpleSelect";
import SearchListingVertical from "../Layout/SearchListingVertical";
import { Link } from "react-router-dom";
import { filterListings } from "../../actions/listing";

const MyListings = ({
  filterListings,
  listing: { listings, loading },
  auth
}) => {
  useEffect(() => {
    if (auth && auth.user) {
      const userId = auth.user._id;
      filterListings({ user: userId });
    }
  }, [filterListings, auth]);

  const setSelect = (e, name) => {
    listings = listings.sort((a, b) => a.price - b.price);
  };
  return loading ? (
    <Loading />
  ) : (
    <div id="page-content">
      <div className="container">
        <ol className="breadcrumb">
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/listings">İlanlar</Link>
          </li>
          <li className="active">İlanlarım</li>
        </ol>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-9">
            <section id="results">
              <header>
                <h1>İlanlarım</h1>
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
                        name="sort"
                        options={[
                          { value: "0", label: "Eskiden Yeniye" },
                          { value: "1", label: "Yeniden Eskiye" },
                          { value: "2", label: "Pahalıdan Ucuza" },
                          { value: "3", label: "Ucuzdan Pahalıya" }
                        ]}
                        setSelect={(e, name) => setSelect(e, name)}
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

MyListings.propTypes = {
  filterListings: PropTypes.func.isRequired,
  listing: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  listing: state.listing,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { filterListings }
)(MyListings);
