import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: { name, surname, avatar, email, phoneNo, company, city }
}) => {
  return (
    <div class="agent">
      <a href="agent-detail.html" class="agent-image">
        <img alt="" src={avatar} width="" />
      </a>
      <div class="wrapper">
        <header>
          <a href="agent-detail.html">
            <h2>
              {name} {surname}
            </h2>
          </a>
        </header>
        <aside>14 İlanlar</aside>
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
