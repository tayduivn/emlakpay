import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getListingById } from "../../actions/listing";
import { favListing } from "../../actions/listing";
import { loadUser } from "../../actions/auth";
import Loading from "../Layout/Loading";
import { Link } from "react-router-dom";
import ImageGallery from "../Layout/ImageGallery";
const Listing = ({
  getListingById,
  favListing,
  loadUser,
  listing: { listing, loading },
  match,
  auth,
  profile: { profile }
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
            <li>
              <Link to="/listings"> İlanlar </Link>
            </li>
            <li className="active">{title}</li>
          </ol>
        </div>
        <div className="container">
          <section id="property-detail">
            <div className="row">
              <div className="col-md-9 col-sm-12">
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
                      onClick={e => {
                        e.preventDefault();
                        favListing(_id);
                      }}
                    >
                      <span className="title-add">Favorilere Ekle</span>
                      <span className="title-added">Eklendi</span>
                    </a>
                  </span>
                </header>

                <section id="property-gallery">
                  {img && img.length > 0 ? <ImageGallery imgArray={img} /> : ""}
                </section>
                <section id="description">
                  <header>
                    <h2>İlan Açıklaması</h2>
                  </header>
                  <p>{brief}</p>
                </section>
              </div>
              <div className="col-md-3 col-sm-12">
                <section id="quick-summary" className="clearfix">
                  <header>
                    <h2>Gayrimenkul Bilgileri</h2>
                  </header>
                  <dl>
                    <dt>Adres</dt>
                    <dd>
                      {location.neighborhood}, {location.district},{" "}
                      {location.province}
                    </dd>
                    <dt>Fiyat</dt>
                    <dd>
                      <span className="tag price">{price} TL</span>
                    </dd>
                    <dt>Emlak Tipi:</dt>
                    <dd>
                      {propertyStatus} {propertyType}
                    </dd>
                    <dt>Brüt m2:</dt>
                    <dd>
                      {grossm2} m<sup>2</sup>
                    </dd>
                    <dt>Net m2:</dt>
                    <dd>
                      {netm2} m<sup>2</sup>
                    </dd>
                    <dt>Oda:</dt>
                    <dd>{roomCount}</dd>
                    <dt>Salon:</dt>
                    <dd>{loungeCount}</dd>
                    <dt>Banyo:</dt>
                    <dd>{bathroomCount}</dd>
                    <dt>Yaş:</dt>
                    <dd>{age}</dd>
                    <dt>Bulunduğu Kat:</dt>
                    <dd>{floor}</dd>
                    <dt>Kat Sayısı:</dt>
                    <dd>{totalFloor}</dd>
                    <dt>Isınma:</dt>
                    <dd>{heating}</dd>
                    <dt>Balkon:</dt>
                    <dd>{balcony ? "Var" : "Yok"}</dd>
                    <dt>Mobilyalı:</dt>
                    <dd>{furnished ? "Evet" : "Hayır"}</dd>
                    <dt>Site İçerisinde:</dt>
                    <dd>{inSite ? "Evet" : "Hayır"}</dd>
                    <dt>Kullanım Durumu:</dt>
                    <dd>{usageStatus}</dd>
                    <dt>Aidat:</dt>
                    <dd>{dues}</dd>
                    <dt>Takas:</dt>
                    <dd>{swap ? "Evet" : "Hayır"}</dd>
                    {side ? (
                      <Fragment>
                        <dt>Cephe:</dt>
                        <dd>{side}</dd>
                      </Fragment>
                    ) : (
                      ""
                    )}
                  </dl>
                </section>
              </div>

              <div className="col-md-9 col-sm-12">
                <section id="contact-agent">
                  <header>
                    <h2>Portföy Sahibi</h2>
                  </header>

                  {profile ? (
                    <section className="agent-form">
                      <aside className="agent-info clearfix">
                        <figure>
                          <Link to={`/profile/${listing.user}`}>
                            <img alt="" src={profile.avatar} />
                          </Link>
                        </figure>
                        <div className="agent-contact-info">
                          <h3>
                            {profile.name} {profile.surname}
                          </h3>
                          <p>{profile.bio}</p>
                          <dl>
                            <dt>Telefon No:</dt>
                            <dd>{profile.phoneNo ? profile.phoneNo : "-"}</dd>
                            <dt>Email:</dt>
                            <dd>{profile.email ? profile.email : "-"}</dd>
                            <dt>Emlak Ofisi:</dt>
                            <dd>{profile.company ? profile.company : "-"}</dd>
                          </dl>
                          <hr />
                          <Link
                            to={`/profile/${listing.user}`}
                            className="link-arrow"
                          >
                            Profili Gör
                          </Link>
                        </div>
                      </aside>
                    </section>
                  ) : (
                    <section className="agent-form">
                      <h3>Bu portföyün sahibi henüz bir profil eklemedi.</h3>
                    </section>
                  )}
                </section>
                <hr className="thick" />
              </div>
            </div>
          </section>
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
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  listing: state.listing,
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getListingById, favListing, loadUser }
)(Listing);
