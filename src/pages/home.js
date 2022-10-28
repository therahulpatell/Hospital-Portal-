import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import UploadImg from "./upload";
import { FcReddit } from "react-icons/fc";

export const Home = () => {
  let history = useHistory();
  const content_align = {
    alignContent: "center",
  };
  /*  render(){ */
  return (
    <div>
      {/* <!-- ################# Header Starts Here#######################---> */}

      <header>
        <div class='header-top'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-5 d-none d-lg-block right-item'>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
        <div id='nav-head' class='header-nav'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-3 col-sm-12 nav-img'>
                <img src='assets/images/logo.jpg' alt='' />
                <a data-toggle='collapse' data-target='#menu' href='#menu'>
                  <i class='fas d-block d-md-none small-menu fa-bars'></i>
                </a>
              </div>
              <div id='menu' class='col-md-9 d-none d-md-block nav-item'>
                <ul>
                  <li>
                    <Link to='./home'>Home</Link>{" "}
                  </li>
                  <li>
                    <Link to='./AboutUs'>About Us</Link>{" "}
                  </li>
                  <li>
                    <Link to='./services'>Services</Link>{" "}
                  </li>
                  <li>
                    <Link to='./ContactUs'>Contact Us</Link>{" "}
                  </li>
                  <ul class='nav navbar-nav navbar-right'>
                    <li
                      onClick={() => {
                        history.push("/login");
                      }}
                      style={{ content_align }}
                    >
                      <button class='btn btn-success '>SignOut</button>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class='slider-detail'>
        <div
          id='carouselExampleIndicators'
          class='carousel slide'
          data-ride='carousel'
        >
          <ol class='carousel-indicators'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              class='active'
            ></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
          </ol>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img
                class='d-block w-100'
                src='assets/images/slider/slider_1.jpg'
                alt='First slide'
              />
              <div class='carousel-caption d-none d-md-block'>
                <h5 class='animated bounceInDown'>Covid-19 Detection</h5>
                <p class='animated bounceInLeft'>
                  Corona virus detection <br />
                  using <br />
                  chest X-Rays.
                </p>

                <div class='row vbh'>
                  <Link
                    to='/upload'
                    class='btn btn-success animated bounceInUp'
                  >
                    {" "}
                    Upload a X-Ray{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div class='carousel-item'>
              <img
                class='d-block w-100'
                src='assets\images\slider\slider_3.jpg'
                alt='Third slide'
              />
              <div class='carousel-caption vdg-cur d-none d-md-block'>
                <h5 class='animated bounceInDown'>Covid-19 Vaccine</h5>
                <p class='animated bounceInLeft'>
                  COVID-19 vaccines have reached billions of people worldwide,{" "}
                  <br />
                  the evidence is overwhelming that no matter which one you
                  take, <br />
                  the vaccines offer life-saving protection against a disease
                  that has killed millions.{" "}
                </p>

                <div class='row vbh'>
                  <div class='btn btn-success animated bounceInUp'>
                    {" "}
                    Book an Appointment{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class='carousel-item'>
              <img
                class='d-block w-100'
                src='assets/images/slider/slider_2.jpg'
                alt='Second slide'
              />
              <div class='carousel-caption vdg-cur d-none d-md-block'>
                <h5 class='animated bounceInDown'>Covid-19 Hospital</h5>
                <p class='animated bounceInLeft'>
                  Nearest Covid-19 and Non Covid-19 <br />
                  Hospitals in your <br />
                  Localities.{" "}
                </p>

                <div class='row vbh'>
                  <div class='btn btn-success animated bounceInUp'>
                    {" "}
                    Book an Appointment{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class='carousel-control-prev'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='sr-only'>Previous</span>
          </a>
          <a
            class='carousel-control-next'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='sr-only'>Next</span>
          </a>
        </div>
      </div>

      {/* <!-- ################# Key Features Starts Here#######################---> */}
      <section class='key-features'>
        <div class='container'>
          <div class='inner-title'>
          <li class="click" style={{ bottom:'0', right:'0', position:'fixed', padding:'30px'}}>
                <FcReddit size='5rem' onClick={() => window.open("/SimpleForm")}/>
            </li>  
            <h2>Our Key Features</h2>
            <p>Take a look our key features</p>
          </div>

          <div class='row'>
            <div class='col-md-4 col-sm-6'>
              <div class='single-key'>
                <i class='fas fa-hospital-alt'></i>
                <h5>Nearest COVID Hospitals</h5>
                <p>
                  You can find the COVID Hospitals <br /> near you here!! <br />{" "}
                  And Book Appointments.
                </p>
              </div>
            </div>

            <div class='col-md-4 col-sm-6'>
              <div class='single-key'>
                <i class='fas fa-hospital-alt'></i>
                <h5>Nearest NON-COVID Hospitals</h5>
                <p>
                  You can find the NON-COVID Hospitals near you here!! Book
                  Appointments, Book Beds AND Make Payments.
                </p>
              </div>
            </div>

            <div class='col-md-4 col-sm-6'>
              <div class='single-key'>
                <i class='fas fa-briefcase-medical'></i>
                <h5>COVID DETECTION</h5>
                <p>
                  Upload your covid test Report here!! And see the SEVERIRITY
                  and possible precautions here
                </p>
              </div>
            </div>

            <div class='col-md-4 col-sm-6'>
              <div class='single-key'>
                <i class='fas fa-syringe'></i>
                <h5>COWIN VACINATION</h5>
                <p>
                  Find places and slots that have <br /> COWIN VACINATION
                  centers <br /> available in your localities.
                </p>
              </div>
            </div>

            <div class='col-md-4 col-sm-6'>
              <div class='single-key'>
                <i class='fas fa-chalkboard-teacher'></i>
                <h5> ChatBot </h5>
                <p>
                  24/7 <br /> live chat section <br /> available.
                </p>
              </div>
            </div>

            <div class='col-md-4 col-sm-6'>
              <div class='single-key'>
                <i class='fas fa-comments'></i>
                <h5> Social Section </h5>
                <p>
                  Here you can pass general medical related comments, questions
                  and favors. Request for a fund raise and post medical
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*   <!-- ################# Footer Starts Here#######################---> */}
      <footer class='footer'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-4 col-sm-12'>
              <h2>About Us</h2>
              <p>
                Our sole motive is to improvise the Detection and Diagnosis of
                COVID-19 Using Medical Image Inception Using AI-Based ML and DL
                by Using Chest X-Rays.
              </p>
              <p>
                We focus on technologies that promise to reduce time and ease
                the functionalities of the patient in this severe Covid-19
                Pandemic .{" "}
              </p>
            </div>
            <div class='col-md-4 col-sm-12'>
              <h2>Useful Links</h2>
              <ul class='list-unstyled link-list'>
                <li>
                  <a ui-sref='about' href='#/about'>
                    About us
                  </a>
                  <i class='fa fa-angle-right'></i>
                </li>
                <li>
                  <a ui-sref='gallery' href='#/gallery'>
                    Gallery
                  </a>
                  <i class='fa fa-angle-right'></i>
                </li>
                <li>
                  <a ui-sref='contact' href='#/contact'>
                    Contact us
                  </a>
                  <i class='fa fa-angle-right'></i>
                </li>
              </ul>
            </div>
            <div class='col-md-4 col-sm-12 map-img'>
              <h2>Contact Us</h2>
              <address class='md-margin-bottom-40'>
                ################# <br />
                ################# <br />
                ################# <br />
                Phone: ################# <br />
                Email:{" "}
                <a href='mailto:info@anybiz.com' class=''>
                  info@bluedart.in
                </a>
                <br />
                Web:{" "}
                <a href='smart-eye.html' class=''>
                  www.bluedart.in
                </a>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
