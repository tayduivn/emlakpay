import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../Layout/Loading";
import { getProfileById } from "../../actions/profile";
import ListingGrid from "../Listing/ListingGrid";
import { getListings } from "../../actions/listing";
import SocialNetworks from "./SocialNetworks";
import { Link } from "react-router-dom";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  match,
  listing: { listings },
  getListings
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
    getListings();
  }, [getProfileById, match.params.id, getListings]);

  return (
    <Fragment>
      {loading || profile == null ? (
        <Loading />
      ) : (
        <div id="page-content">
          <div>
            <div className="container">
              <ol className="breadcrumb">
                <li>
                  <Link to="/">Anasayfa</Link>
                </li>
                <li>
                  <Link to="/profiles">Profiller</Link>
                </li>
                {profile ? (
                  <li className="active">
                    {profile.name} {profile.surname}
                  </li>
                ) : (
                  ""
                )}
              </ol>
            </div>
            {!profile ? (
              <div className="container">
                <section id="agent-detail">
                  <section id="agent-info">
                    <h3>Henüz herkese açık bir profil oluşturmadınız</h3>
                    <p>
                      <Link to="/account">Buraya </Link> tıklayarak herkese açık
                      bir profil oluşturun ve görünür olmaya başlayın.
                    </p>
                  </section>
                </section>
              </div>
            ) : (
              <div className="container">
                <section id="agent-detail">
                  <header>
                    <h1>
                      {profile.name} {profile.surname}
                    </h1>
                  </header>
                  <section id="agent-info">
                    <div className="row">
                      <div className="col-md-3 col-sm-3">
                        <figure className="agent-image">
                          <img
                            alt=""
                            className="image"
                            src={profile.avatar}
                            style={{
                              width: "150px",
                              height: "150px",
                              marginLeft: "auto",
                              marginRight: "auto",
                              borderRadius: "50%",
                              display: "block",
                              marginBottom: "20px"
                            }}
                          />
                        </figure>
                      </div>

                      <div className="col-md-5 col-sm-5">
                        <h3>İletişim</h3>
                        <dl>
                          <dt>Tel No:</dt>
                          <dd>{profile.phoneNo ? profile.phoneNo : "-"}</dd>
                          <dt>E-posta:</dt>
                          <dd>{profile.email ? profile.email : "-"}</dd>
                          <dt>Şehir:</dt>
                          <dd>{profile.city ? profile.city : "-"}</dd>
                        </dl>
                      </div>
                      <div className="col-md-4 col-sm-4">
                        <h3>Hakkımda</h3>
                        <p>{profile.bio}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-offset-3 col-md-5 col-sm-offset-3 col-sm-5">
                        <h3>Emlak Ofisi</h3>
                        <p style={{ fontSize: "20px" }}>
                          {profile.company ? profile.company : "-"}
                        </p>
                      </div>
                      {profile.social && (
                        <SocialNetworks social={profile.social} />
                      )}
                    </div>
                  </section>
                  <hr className="thick" />
                  <section id="agent-properties">
                    <header>
                      <h3>My Properties (24)</h3>
                    </header>
                    <div className="layout-expandable">
                      <div className="row">
                        {listings.length > 0 ? (
                          listings.map(listing => (
                            <div
                              className="col-md-3 col-sm-3"
                              key={listing._id}
                            >
                              <ListingGrid
                                listing={listing}
                                key={listing._id}
                              />
                            </div>
                          ))
                        ) : (
                          <div className="col-md-12">
                            <h4> İlan Bulunamadı </h4>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                </section>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  getListings: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  listing: state.listing
});
export default connect(
  mapStateToProps,
  { getProfileById, getListings }
)(Profile);
