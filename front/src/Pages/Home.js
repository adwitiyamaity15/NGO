import Header from "../inc/Header";
import Footer from "../inc/Footer";

function Home() {
    return (
      <>
        <Header />
        {/* ******************** Slider Starts Here ******************* */}
        <div className="slider">
          {/* Set up your HTML */}
          <div className="owl-carousel ">
            <div className="slider-img">
              <div className="item">
                <div className="slider-img">
                  <img src="assets/images/slider/slider-3.jpg" alt />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                      <div className="animated bounceInDown slider-captions">
                        <h1 className="slider-title">
                          Most Stylish Free Travel Website
                        </h1>
                        <p className="slider-text hidden-xs">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="slider-img">
                <img src="assets/images/slider/slider-1.jpg" alt />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                    <div className="slider-captions ">
                      <h1 className="slider-title">
                        It's time for better help.
                      </h1>
                      <p className="slider-text hidden-xs">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="slider-img">
                <img src="assets/images/slider/slider-2.jpg" alt />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                    <div className="slider-captions ">
                      <h1 className="slider-title">
                        Most Attractive Travel Template
                      </h1>
                      <p className="slider-text hidden-xs">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
    
}

export default Home;