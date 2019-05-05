import React from "react";

const SecondaryNavigation = () => {
  return (
    <div className="secondary-navigation">
      <div className="container">
        <div className="contact">
          <figure>
            <strong>Telefon:</strong>0232 765 77 66
          </figure>
          <figure>
            <strong>Email:</strong>destek@emlakpay.com
          </figure>
        </div>
        <div className="user-area">
          <div className="actions">
            <a href="create-account.html" className="promoted">
              <strong>Üye Ol</strong>
            </a>
            <a href="sign-in.html">Giriş Yap</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavigation;
