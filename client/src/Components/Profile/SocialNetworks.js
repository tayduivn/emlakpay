import React from "react";

const SocialNetworks = ({ social: { linkedin, twitter, facebook } }) => {
  return (
    <div className="col-md-4 col-sm-4">
      <h3>Sosyal Ağlar</h3>
      <div className="agent-social">
        {twitter ? (
          <a href={twitter} className="fa fa-twitter btn btn-grey-dark" />
        ) : (
          ""
        )}
        {facebook ? (
          <a href={facebook} className="fa fa-facebook btn btn-grey-dark" />
        ) : (
          ""
        )}
        {linkedin ? (
          <a href={linkedin} className="fa fa-linkedin btn btn-grey-dark" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SocialNetworks;
