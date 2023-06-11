function Header() {
  return (
    <>
      <header className="continer-fluid ">
        <div className="header-top">
          <div className="container">
            <div className="row col-det">
              <div className="col-lg-6 d-none d-lg-block">
                <ul className="ulleft">
                  <li>
                    <i className="far fa-envelope" />
                    sales@smarteyeapps.com
                    <span>|</span>
                  </li>
                  <li>
                    <i className="fas fa-phone-volume" />
                    +876 987 666 5433
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 folouws">
                <ul className="ulright">
                  <li>
                    <small>Folow Us </small>:
                  </li>
                  <li>
                    <i className="fab fa-facebook-square" />
                  </li>
                  <li>
                    <i className="fab fa-twitter-square" />
                  </li>
                  <li>
                    <i className="fab fa-instagram" />
                  </li>
                  <li>
                    <i className="fab fa-linkedin" />
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 d-none d-md-block col-md-6 btn-bhed">
                <button className="btn btn-sm btn-success">Join Us</button>
                <button className="btn btn-sm btn-default">Donate</button>
              </div>
            </div>
          </div>
        </div>
        <div id="menu-jk" className="header-bottom">
          <div className="container">
            <div className="row nav-row">
              <div className="col-lg-3 col-md-12 logo">
                <a href="index.html">
                  <img src="assets/images/logo.jpg" alt />
                </a>
                <a data-toggle="collapse" data-target="#menu" href="#menu">
                  <i className="fas d-block d-lg-none  small-menu fa-bars" />
                </a>
              </div>
              <div
                id="menu"
                className="col-lg-9 col-md-12 d-none d-lg-block nav-col"
              >
                <ul className="navbad">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about_us.html">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="services.html">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="gallery.html">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact_us.html">
                      Contact US
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
