import React from "react";
import { Link } from "react-router-dom";
import ListingGrid from "../Listing/Grid";
const Profile = () => {
  return (
    <div id="page-content">
      <div>
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profiles">Profiller</Link>
            </li>
            <li className="active">Profilim</li>
          </ol>
        </div>
        <div className="container">
          <section id="agent-detail">
            <header>
              <h1>Robert Farley</h1>
            </header>
            <section id="agent-info">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <figure className="agent-image">
                    <img alt="" src="assets/img/agent-01.jpg" />
                  </figure>
                </div>
                <div className="col-md-5 col-sm-5">
                  <h3>Contact Info</h3>
                  <dl>
                    <dt>Phone:</dt>
                    <dd>(123) 456 789</dd>
                    <dt>Mobile:</dt>
                    <dd>888 123 456 789</dd>
                    <dt>Email:</dt>
                    <dd>
                      <a href="mailto:#">john.doe@example.com</a>
                    </dd>
                    <dt>Skype:</dt>
                    <dd>john.doe</dd>
                  </dl>
                </div>
                <div className="col-md-4 col-sm-4">
                  <h3>Shortly About Me</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras et dui vestibulum, bibendum purus sit amet, vulputate
                    mauris. Ut adipiscing gravida tincidunt. Duis euismod
                    placerat rhoncus. Phasellus mollis imperdiet placerat.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-offset-3 col-md-5 col-sm-offset-3 col-sm-5">
                  <h3>Agency</h3>
                  <a href="agency-detail.html" className="agency-logo">
                    <img alt="" src="assets/img/agency-logo-01.png" />
                  </a>
                </div>
                <div className="col-md-4 col-sm-4">
                  <h3>My Social Profiles</h3>
                  <div className="agent-social">
                    <a href="#" className="fa fa-twitter btn btn-grey-dark" />
                    <a href="#" className="fa fa-facebook btn btn-grey-dark" />
                    <a href="#" className="fa fa-linkedin btn btn-grey-dark" />
                  </div>
                </div>
              </div>
            </section>
            <hr className="thick" />
            <section id="agent-properties">
              <header>
                <h3>My Properties (24)</h3>
              </header>
              <div className="layout-expandable">
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <ListingGrid />
                  </div>
                </div>
              </div>
              <div className="center">
                <span className="show-all">Show All Properties</span>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
