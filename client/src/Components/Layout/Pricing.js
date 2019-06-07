import React from "react";

const Pricing = () => {
  return (
    <div id="page-content">
      <div class="container">
        <ol class="breadcrumb">
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li class="active">Fiyatlandırma</li>
        </ol>
      </div>
      <div class="container">
        <header>
          <h1>Fiyatlandırma</h1>
        </header>
        <section id="pricing">
          <div class="row">
            <div class="col-md-4 col-md-offset-1 col-sm-6">
              <div class="price-box">
                <header>
                  <h2>Ücretsiz</h2>
                </header>
                <div class="price">
                  <figure>0 ₺</figure>
                  <small>Daima Ücretsiz</small>
                </div>
                <ul>
                  <li>
                    <span>10</span> Listeleme
                  </li>
                  <li className="not-available">Takip Etme / Edilme</li>
                  <li class="not-available">Emlak Ofisi Profili</li>
                  <li class="not-available">Tavsiye Edilen Ürünler</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-md-offset-1 col-sm-6">
              <div class="price-box promoted">
                <header>
                  <h2>Pro</h2>
                </header>
                <div class="price">
                  <figure>39,99 ₺</figure>
                  <small>/ ay</small>
                </div>
                <ul>
                  <li>
                    <span>Sınırsız</span> Listeleme
                  </li>
                  <li>Takip Etme / Edilme</li>
                  <li>Emlak Ofisi Profili</li>
                  <li>Tavsiye Edilen Ürünler</li>
                </ul>
                <a href="#" class="btn btn-default">
                  Ödemeye Geç
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
