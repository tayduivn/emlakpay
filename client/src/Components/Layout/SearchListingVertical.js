import React from "react";
import SimpleSelect from "./SimpleSelect";
const SearchListingVertical = () => {
  return (
    <section id="sidebar">
      <aside id="edit-search">
        <header>
          <h3>İlan Ara</h3>
        </header>
        <form
          role="form"
          id="form-sidebar"
          className="form-search"
          action="properties-listing.html"
        >
          <div className="form-group">
            <SimpleSelect
              placeholder="İlan Tipi"
              options={[
                { value: "Satılık", label: "Satılık" },
                { value: "Kiralık", label: "Kiralık" }
              ]}
            />
          </div>
          <div className="form-group">
            <SimpleSelect
              placeholder="Emlak Tipi"
              options={[
                { value: "Konut", label: "Konut" },
                { value: "İşyeri", label: "İşyeri" },
                { value: "Arsa", label: "Arsa" },
                { value: "Bina", label: "Bina" },
                { value: "Devremülk", label: "Devremülk" },
                { value: "Turistik Tesis", label: "Turistik Tesis" }
              ]}
            />
          </div>

          <div className="form-group">
            <div>
              <input
                placeholder="Min Fiyat"
                id="price-min"
                type="number"
                name="price-min"
              />
            </div>
            <div>
              <input
                placeholder="Max Fiyat"
                id="price-max"
                type="number"
                name="price-max"
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">
              Search Now
            </button>
          </div>
        </form>
      </aside>

      <aside id="our-guides">
        <header>
          <h3>Our Guides</h3>
        </header>
        <a href="#" className="universal-button">
          <figure className="fa fa-home" />
          <span>Buying Guide</span>
          <span className="arrow fa fa-angle-right" />
        </a>
        <a href="#" className="universal-button">
          <figure className="fa fa-umbrella" />
          <span>Right Insurance for You</span>
          <span className="arrow fa fa-angle-right" />
        </a>
      </aside>
    </section>
  );
};

export default SearchListingVertical;
