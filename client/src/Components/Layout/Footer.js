import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="page-footer">
      <div className="inner">
        <aside id="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <article>
                  <h3>Hakkımızda</h3>
                  <p>
                    Emlakpay.com çatısı altında toplanan emlakçılarımız, emlak
                    ve müşteri portföylerini birbirleri ile paylaşırlar ve olası
                    eşleşmelerde anlaşmaya varılırsa kazancı bölüşürler.
                    Emlakpay.com emlakçılarımızın paylaşımlarını yaptıkları ve
                    diğer emlakçıların paylaşımlarını inceledikleri bir
                    platformdur ancak bu anlaşmalarda herhangi bir rol
                    üstlenmez.
                  </p>
                </article>
              </div>
              <div className="col-md-3 col-sm-3">
                <article>
                  <h3>İletişim</h3>
                  <address>
                    <strong>Tekent Bilişim A.Ş</strong>
                    <br />
                    Teknopark İzmir A3 Binası
                    <br />
                    No:32 Urla/İzmir
                  </address>
                  0 (232) 765 77 66
                  <br />
                  destek@emlakpay.com
                </article>
              </div>
              <div className="col-md-3 col-sm-3">
                <article>
                  <h3>Yararlı Bağlantılar</h3>
                  <ul className="list-unstyled list-links">
                    <li>
                      <Link to="/listings">Tüm İlanlar</Link>
                    </li>
                    <li>
                      <Link to="/login">Giriş Yap</Link>
                    </li>
                    <li>
                      <Link to="/register">Üye Ol</Link>
                    </li>
                    <li>
                      <Link to="#">Kullanıcı Sözleşmesi</Link>
                    </li>
                    <li>
                      <Link to="#">S.S.S</Link>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </aside>
        <aside id="footer-thumbnails" className="footer-thumbnails" />
        <aside id="footer-copyright">
          <div className="container">
            <span>© 2019 Emlakpay.com bir Tekent Bilişim A.Ş girişimidir.</span>
            <span className="pull-right">
              <a href="#page-top" className="roll">
                <i class="fa fa-arrow-up" aria-hidden="true" />
              </a>
            </span>
          </div>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
