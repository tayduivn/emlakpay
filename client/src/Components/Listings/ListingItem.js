import React from "react";
import { Link } from "react-router-dom";
const ListingItem = ({
  listing: {
    img,
    price,
    title,
    location,
    grossm2,
    netm2,
    roomCount,
    loungeCount,
    bathroomCount,
    propertyStatus,
    _id
  }
}) => {
  return (
    <div>
      <Link to={`/listing/${_id}`}>
        <div className="property">
          <figure className="tag status">
            {propertyStatus === "Satılık" ? "Satılık" : "Kiralık"}
          </figure>

          <div className="property-image">
            <img
              alt=""
              src={img[0] ? img[0] : "/assets/img/properties/property-09.jpg"}
            />
          </div>

          <div className="overlay">
            <div className="info">
              <div className="tag price">{price} ₺</div>
              <h3>{title}</h3>
              <figure>
                {location.neighborhood} - {location.district} -{" "}
                {location.province}
              </figure>
            </div>
            <ul className="additional-info">
              <li>
                <header>Brüt:</header>
                <figure>
                  {grossm2}
                  <sup>2</sup>
                </figure>
              </li>
              <li>
                <header>Net:</header>
                <figure>
                  {netm2}
                  <sup>2</sup>
                </figure>
              </li>
              <li>
                <header>Oda:</header>
                <figure>{roomCount}</figure>
              </li>
              <li>
                <header>Salon:</header>
                <figure>{loungeCount}</figure>
              </li>
              <li>
                <header>Banyo:</header>
                <figure>{bathroomCount}</figure>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
