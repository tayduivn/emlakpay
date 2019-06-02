import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProfileItem = ({
  profile: { name, surname, avatar, email, phoneNo, company, city, user }
}) => {
  return (
    <div className="col-md-12 col-lg-12">
      <div className="agent">
        <Link to={`/profile/${user._id}`} className="agent-image">
          <img alt="" src="assets/img/agent-01.jpg" />
        </Link>
        <div className="wrapper">
          <header>
            <Link to={`/profile/${user._id}`}>
              <h2>
                {name} {surname}
              </h2>
            </Link>
          </header>

          <dl>
            <dt>Telefon:</dt>
            <dd>{phoneNo ? phoneNo : "-"}</dd>
            <dt>E-Posta:</dt>
            <dd>
              <a href={`mailto:${{ email }}`}>{email ? email : "-"}</a>
            </dd>
            <dt>Emlak Ofisi:</dt>
            <dd>{company ? company : "-"}</dd>
            <dt>Şehir:</dt>
            <dd>{city ? city : "-"}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
