import React, { useState } from "react";
import SimpleSelect from "./SimpleSelect";
import { connect } from "react-redux";
import LocationSelector from "./LocationSelector";
import Guides from "./Guides";
import { filterListings } from "../../actions/listing";
import PropTypes from "prop-types";
const SearchListingVertical = ({ filterListings }) => {
  const [formData, setFormData] = useState({
    district: "",
    province: "",
    neighborhood: "",
    minPrice: 0,
    maxPrice: 0,
    propertyType: "",
    propertyStatus: "",
    minGrossm2: 0,
    maxGrossm2: 0,
    minRoomCount: 0,
    maxRoomCount: 0,
    minLoungeCount: 0,
    maxLoungeCount: 0
  });

  const {
    district,
    province,
    neighborhood,
    minPrice,
    maxPrice,
    propertyType,
    propertyStatus,
    minGrossm2,
    maxGrossm2,
    minRoomCount,
    maxRoomCount,
    minLoungeCount,
    maxLoungeCount
  } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const setSelect = (e, name) => {
    setFormData({ ...formData, [name]: e.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    const query = {};
    district !== "" && (query.district = district);
    province !== "" && (query.province = province);
    neighborhood !== "" && (query.neighborhood = neighborhood);
    propertyType !== "" && (query.propertyType = propertyType);
    propertyStatus !== "" && (query.propertyStatus = propertyStatus);
    minPrice !== 0 && (query.price = { $gte: minPrice });
    maxPrice !== 0 && (query.price = { $gte: minPrice, $lte: maxPrice });
    minGrossm2 !== 0 && (query.price = { $gte: minGrossm2 });
    maxGrossm2 !== 0 && (query.price = { $gte: minGrossm2, $lte: maxGrossm2 });
    minRoomCount !== 0 && (query.price = { $gte: minRoomCount });
    maxRoomCount !== 0 &&
      (query.price = { $gte: minRoomCount, $lte: maxRoomCount });
    minLoungeCount !== 0 && (query.price = { $gte: minLoungeCount });
    maxLoungeCount !== 0 &&
      (query.price = { $gte: minLoungeCount, $lte: maxLoungeCount });
    filterListings(query);
  };

  return (
    <section id="sidebar">
      <aside id="edit-search">
        <header>
          <h3>İlan Ara</h3>
        </header>
        <form
          id="form-sidebar"
          className="form-search"
          onSubmit={e => {
            onSubmit(e);
          }}
        >
          <div className="form-group">
            <SimpleSelect
              placeholder="İlan Tipi"
              name="propertyStatus"
              options={[
                { value: "Satılık", label: "Satılık" },
                { value: "Kiralık", label: "Kiralık" }
              ]}
              setSelect={(e, name) => setSelect(e, name)}
            />
          </div>
          <div className="form-group">
            <SimpleSelect
              placeholder="Emlak Tipi"
              name="propertyType"
              options={[
                { value: "Konut", label: "Konut" },
                { value: "İşyeri", label: "İşyeri" },
                { value: "Arsa", label: "Arsa" },
                { value: "Bina", label: "Bina" },
                { value: "Devremülk", label: "Devremülk" },
                { value: "Turistik Tesis", label: "Turistik Tesis" }
              ]}
              setSelect={(e, name) => setSelect(e, name)}
            />
          </div>
          <div className="form-group">
            <LocationSelector />
          </div>

          <div className="form-group">
            <div>
              <input
                placeholder="Fiyat (min)"
                type="number"
                name="minPrice"
                style={{ width: "48%", marginRight: "4%" }}
                onChange={e => onChange(e)}
              />
              <input
                placeholder="Fiyat (max)"
                type="number"
                name="maxPrice"
                style={{ width: "48%" }}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <input
                placeholder="Brüt m2 (min)"
                type="number"
                name="minGrossm2"
                style={{ width: "48%", marginRight: "4%" }}
                onChange={e => onChange(e)}
              />
              <input
                placeholder="Brüt m2 (max)"
                type="number"
                name="maxGrossm2"
                style={{ width: "48%" }}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <input
                placeholder="Oda (min)"
                type="number"
                name="minRoomCount"
                style={{ width: "48%", marginRight: "4%" }}
                onChange={e => onChange(e)}
              />
              <input
                placeholder="Oda (max)"
                type="number"
                name="maxRoomCount"
                style={{ width: "48%" }}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <input
                placeholder="Salon (min)"
                type="number"
                name="minLoungeCount"
                style={{ width: "48%", marginRight: "4%" }}
                onChange={e => onChange(e)}
              />
              <input
                placeholder="Salon (max)"
                type="number"
                name="maxLoungeCount"
                style={{ width: "48%" }}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">
              Ara
            </button>
          </div>
          <div className="form-group">
            <button className="btn btn-info">Detaylı Ara</button>
          </div>
        </form>
      </aside>
      <Guides />
    </section>
  );
};
SearchListingVertical.propTypes = {
  filterListings: PropTypes.func.isRequired
};

export default connect(
  null,
  { filterListings }
)(SearchListingVertical);
