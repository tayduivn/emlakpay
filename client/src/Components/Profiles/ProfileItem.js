import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProfileItem = ({
  profile: { name, surname, avatar, email, phoneNo, company, city, user }
}) => {
  return (
    <div className="agent">
      <img alt="" src={avatar} width="" className="agent-image" />
      <div className="wrapper">
        <header>
          <Link to={`/profile/${user}`}>
            <h2>
              {name} {surname}
            </h2>
          </Link>
        </header>
        <dl>
          <dt>Telefon:</dt>
          <dd>{phoneNo}</dd>
          {email ? (
            <Fragment>
              <dt>E-posta:</dt>
              <dd>{email}</dd>
            </Fragment>
          ) : (
            <Fragment />
          )}
          {company ? (
            <Fragment>
              <dt>Emlak Ofisi:</dt>
              <dd>{company}</dd>
            </Fragment>
          ) : (
            <Fragment />
          )}
          {city ? (
            <Fragment>
              <dt>Şehir:</dt>
              <dd>{city}</dd>
            </Fragment>
          ) : (
            <Fragment />
          )}
        </dl>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
