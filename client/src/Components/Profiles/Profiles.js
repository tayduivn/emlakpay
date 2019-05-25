import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../Layout/Loading";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";
import { Link } from "react-router-dom";
const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div id="page-content">
          <div className="container">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Anasayfa</Link>
              </li>
              <li className="active">Profiller</li>
            </ol>
          </div>
          <div className="container">
            <section id="agents-listing">
              <header>
                <h1>Emlakçı Profilleri</h1>
              </header>
              <div className="row">
                {profiles.length > 0 ? (
                  profiles.map(profile => (
                    <div key={profile._id} className="col-sm-12 col-md-6">
                      <ProfileItem key={profile._id} profile={profile} />
                    </div>
                  ))
                ) : (
                  <h4> No Profiles </h4>
                )}
              </div>
            </section>
            <div className="center">
              <ul className="pagination">
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
