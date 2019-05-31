import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addListing } from "../../actions/listing";
import { Link, withRouter } from "react-router-dom";
import SimpleSelect from "../Layout/SimpleSelect";
import LocationSelector from "../Layout/LocationSelector";
import MultipleImageUploader from "../Layout/MultipleImageUploader";

const ListingForm = ({ addListing, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    brief: "",
    district: "Izmir",
    province: "Urla",
    neighborhood: "Fevzi",
    price: "",
    propertyType: "",
    propertyStatus: "",
    grossm2: "",
    netm2: "",
    roomCount: "",
    loungeCount: "",
    bathroomCount: "",
    age: "",
    floor: "",
    totalFloor: "",
    heating: "",
    balcony: "",
    furnished: "",
    inSite: "",
    usageStatus: "",
    dues: "",
    swap: "",
    side: null
  });

  const {
    title,
    brief,
    location,
    price,
    propertyType,
    propertyStatus,
    grossm2,
    netm2,
    roomCount,
    loungeCount,
    bathroomCount,
    age,
    floor,
    totalFloor,
    heating,
    balcony,
    furnished,
    inSite,
    usageStatus,
    dues,
    swap
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const setSelect = (e, name) => {
    setFormData({ ...formData, [name]: e.value });
  };

  const [files, setFiles] = useState([]);
  const setImages = images => {
    console.log(images);
    setFiles(images[0]);
  };

  const onSubmit = (e, history) => {
    e.preventDefault();
    formData.append("files", files);
    addListing(formData, history);
  };

  return (
    <Fragment>
      <div id="page-content">
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/new-listing" className="active">
                İlan Ekle
              </Link>
            </li>
          </ol>
        </div>

        <div className="container">
          <header>
            <h1>İlan Ekle</h1>
          </header>

          <form
            id="form-submit"
            className="form-submit"
            onSubmit={e => onSubmit(e)}
            encType="multipart/form-data"
          >
            <div className="row">
              <div className="block">
                <section id="submit-form">
                  <div className="col-md-9 col-sm-12">
                    <section id="basic-information">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="form-group">
                            <label htmlFor="submit-title">İlan Başlığı</label>
                            <input
                              type="text"
                              className="form-control"
                              id="submit-title"
                              name="title"
                              value={title}
                              onChange={e => onChange(e)}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="submit-price">Fiyat</label>
                            <div className="input-group">
                              <span className="input-group-addon">₺</span>
                              <input
                                type="text"
                                className="form-control"
                                id="submit-price"
                                name="price"
                                onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="submit-description">Açıklama</label>
                        <textarea
                          className="form-control"
                          id="submit-description"
                          rows="8"
                          name="brief"
                          onChange={e => onChange(e)}
                        />
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <MultipleImageUploader setImages={setImages} />
                      </div>
                    </section>
                  </div>

                  <div className="col-md-3 col-sm-12">
                    <section id="summary">
                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <LocationSelector />
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <SimpleSelect
                              placeholder="İlan Tipi"
                              setSelect={(e, name) => setSelect(e, name)}
                              options={[
                                { value: "Satılık", label: "Satılık" },
                                { value: "Kiralık", label: "Kiralık" }
                              ]}
                              name="propertyStatus"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <SimpleSelect
                              placeholder="Emlak Tipi"
                              setSelect={(e, name) => setSelect(e, name)}
                              options={[
                                { value: "Konut", label: "Konut" },
                                { value: "İşyeri", label: "İşyeri" },
                                { value: "Arsa", label: "Arsa" },
                                { value: "Bina", label: "Bina" },
                                {
                                  value: "Turistik Tesis",
                                  label: "Turistik Tesis"
                                },
                                { value: "Devremülk", label: "Devremülk" }
                              ]}
                              name="propertyType"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <div className="form-group">
                            <div>
                              <input
                                placeholder="Brüt m2"
                                type="number"
                                name="grossm2"
                                style={{ width: "48%", marginRight: "4%" }}
                                onChange={e => onChange(e)}
                              />
                              <input
                                placeholder="Net m2"
                                type="number"
                                name="netm2"
                                style={{ width: "48%" }}
                                onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <div className="form-group">
                            <div>
                              <input
                                placeholder="Oda "
                                type="number"
                                name="roomCount"
                                style={{ width: "32%", marginRight: "2%" }}
                                onChange={e => onChange(e)}
                              />
                              <input
                                placeholder="Salon"
                                type="number"
                                name="loungeCount"
                                style={{ width: "32%", marginRight: "2%" }}
                                onChange={e => onChange(e)}
                              />
                              <input
                                placeholder="Banyo"
                                type="number"
                                name="bathroomCount"
                                style={{ width: "32%" }}
                                onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <div className="form-group">
                            <div>
                              <input
                                placeholder="Bulunduğu Kat"
                                type="number"
                                name="floor"
                                style={{ width: "48%", marginRight: "4%" }}
                                onChange={e => onChange(e)}
                              />
                              <input
                                placeholder="Kat Sayısı"
                                type="number"
                                name="totalFloor"
                                style={{ width: "48%" }}
                                onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <div className="form-group">
                            <div>
                              <input
                                placeholder="Bina Yaşı"
                                type="number"
                                name="age"
                                style={{ width: "48%", marginRight: "4%" }}
                                onChange={e => onChange(e)}
                              />
                              <input
                                placeholder="Aidat"
                                type="number"
                                name="dues"
                                style={{ width: "48%" }}
                                onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <SimpleSelect
                              placeholder="Isınma"
                              setSelect={(e, name) => setSelect(e, name)}
                              options={[
                                { value: "Yok", label: "Yok" },
                                { value: "Soba", label: "Soba" },
                                {
                                  value: "Doğalgaz Sobası",
                                  label: "Doğalgaz Sobası"
                                },
                                {
                                  value: "Kat Kaloriferi",
                                  label: "Kat Kaloriferi"
                                },
                                {
                                  value: "Merkezi",
                                  label: "Merkezi"
                                },
                                {
                                  value: "Merkezi (Pay Ölçer)",
                                  label: "Merkezi (Pay Ölçer)"
                                },
                                {
                                  value: "Doğalgaz (Kombi)",
                                  label: "Doğalgaz (Kombi)"
                                },
                                {
                                  value: "Yerden Isıtma",
                                  label: "Yerden Isıtma"
                                },
                                {
                                  value: "Klima",
                                  label: "Klima"
                                },
                                {
                                  value: "Fancoil Ünitesi",
                                  label: "Fancoil Ünitesi"
                                },
                                {
                                  value: "Güneş Enerjisi",
                                  label: "Güneş Enerjisi"
                                },
                                {
                                  value: "Jeotermal",
                                  label: "Jeotermal"
                                },
                                {
                                  value: "Şömine",
                                  label: "Şömine"
                                },
                                {
                                  value: "VRV",
                                  label: "VRV"
                                },
                                {
                                  value: "Isı Pompası",
                                  label: "Isı Pompası"
                                }
                              ]}
                              name="heating"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <SimpleSelect
                              placeholder="Kullanım"
                              setSelect={(e, name) => setSelect(e, name)}
                              options={[
                                { value: "Boş", label: "Boş" },
                                { value: "Kiracılı", label: "Kiracılı" },
                                { value: "Mülk Sahibi", label: "Mülk Sahibi" }
                              ]}
                              name="usageStatus"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <SimpleSelect
                              placeholder="Site İçerisinde"
                              setSelect={(e, name) => setSelect(e, name)}
                              options={[
                                { value: true, label: "Evet" },
                                { value: false, label: "Hayır" }
                              ]}
                              name="inSite"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <SimpleSelect
                              placeholder="Balkon"
                              setSelect={(e, name) => setSelect(e, name)}
                              options={[
                                { value: true, label: "Var" },
                                { value: false, label: "Yok" }
                              ]}
                              name="balcony"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <SimpleSelect
                              placeholder="Eşyalı"
                              options={[
                                { value: true, label: "Evet" },
                                { value: false, label: "Hayır" }
                              ]}
                              setSelect={(e, name) => setSelect(e, name)}
                              name="furnished"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <SimpleSelect
                              placeholder="Takas"
                              options={[
                                { value: true, label: "Evet" },
                                { value: false, label: "Hayır" }
                              ]}
                              setSelect={(e, name) => setSelect(e, name)}
                              name="swap"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <SimpleSelect
                              placeholder="Cephe"
                              options={[
                                { value: "Kuzey", label: "Kuzey" },
                                { value: "Güney", label: "Güney" },
                                { value: "Doğu", label: "Doğu" },
                                { value: "Batı", label: "Batı" }
                              ]}
                              setSelect={(e, name) => setSelect(e, name)}
                              name="side"
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <hr />
                </section>
              </div>

              <div className="col-md-12 col-sm-12">
                <div className="center">
                  <div className="form-group">
                    <button type="submit" className="btn btn-default xxl">
                      İlan Ekle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

ListingForm.propTypes = {
  addListing: PropTypes.func.isRequired
};

export default connect(
  null,
  { addListing }
)(withRouter(ListingForm));
