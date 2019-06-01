import React from "react";
import SimpleSelect from "./SimpleSelect";
import LocationSelector from "./LocationSelector";
const SearchListingVertical = () => {
  const setSelect = (e, name) => {
    console.log(123);
  };
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
              setSelect={(e, name) => setSelect(e, name)}
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
                name="price-min"
                style={{ width: "48%", marginRight: "4%" }}
              />
              <input
                placeholder="Fiyat (max)"
                type="number"
                name="price-max"
                style={{ width: "48%" }}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <input
                placeholder="Brüt m2 (min)"
                type="number"
                name="m2-min"
                style={{ width: "48%", marginRight: "4%" }}
              />
              <input
                placeholder="Brüt m2 (max)"
                type="number"
                name="m2-max"
                style={{ width: "48%" }}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <input
                placeholder="Oda (min)"
                type="number"
                name="m2-min"
                style={{ width: "48%", marginRight: "4%" }}
              />
              <input
                placeholder="Oda (max)"
                type="number"
                name="m2-max"
                style={{ width: "48%" }}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <input
                placeholder="Salon (min)"
                type="number"
                name="m2-min"
                style={{ width: "48%", marginRight: "4%" }}
              />
              <input
                placeholder="Salon (max)"
                type="number"
                name="m2-max"
                style={{ width: "48%" }}
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

      <aside id="our-guides">
        <header>
          <h3>Our Guides</h3>
        </header>
        <a href="#" className="universal-button">
          <figure className="fa fa-home" />
          <span>Nasıl Çalışır ?</span>
          <span className="arrow fa fa-angle-right" />
        </a>
        <a href="#" className="universal-button">
          <figure className="fa fa-umbrella" />
          <span>S.S.S</span>
          <span className="arrow fa fa-angle-right" />
        </a>
      </aside>
    </section>
  );
};

export default SearchListingVertical;
