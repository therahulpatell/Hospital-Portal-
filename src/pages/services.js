import React from "react";
import {Link,useHistory} from 'react-router-dom'

export const Services = () =>{
    let history = useHistory();
    return (
        <div>
            {/* <!-- ################# Header Starts Here#######################---> */}

                {/* <!-- ################# Header Starts Here#######################---> */}
 
                <header style = {{position:"relative", left:"-5px", top:"2px"}}>
         <div class="header-top"  >
             <div class="container">
                 <div class="row">
                    
                     <div class="col-lg-5 d-none d-lg-block right-item">
                         <ul>
 
                         </ul>
                     </div>
                 </div>
 
             </div>
         </div>
         <div id="nav-head" class="header-nav">
             <div class="container">
                 <div class="row">
                     <div class="col-md-3 col-sm-12 nav-img">
                         <img src="assets/images/logo.jpg" alt=""/>
                        <a data-toggle="collapse" data-target="#menu" href="#menu" ><i class="fas d-block d-md-none small-menu fa-bars"></i></a>
                     </div>
                     <div id="menu" class="col-md-9 d-none d-md-block nav-item">
                         <ul>
                             <li><Link to="./home">Home</Link> </li>
                             <li><Link to="./AboutUs">About Us</Link> </li>
                             <li><Link to="./services">Services</Link> </li>
                             <li><Link to="./ContactUs">Contact Us</Link> </li>
                             <li
                                onClick={()=> {
                                    history.push("/login");
                                    }}>
                                        <button class="btn btn-success" >SignOut</button>
                             </li>
                         </ul>
                     </div>
                 </div>
 
             </div>
         </div>
 
     </header>
            {/* <!--  ************************* Services Section ************************** --> */}
               <div class="page-nav no-margin row">
                   <div class="container">
                       <div class="row">
                           <h2> Services </h2>
                           <ul>
                               <li> <a href="/home"><i class="fas fa-home"></i> Home</a></li>
                               <li><i class="fas fa-angle-double-right"></i> Services</li>
                           </ul>
                       </div>
                   </div>
               </div>
       
         {/* <!-- ######## features here ####### --> */}
    
         <section class="key-features">
        <div class="container">
            <div class="inner-title">

                <h2>Our Services</h2>
                <p>Take a look to our Services</p>
            </div>

            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-hospital-alt"></i>
                        <h5>Nearest COVID Hospitals</h5>
                        <p>You can find the COVID Hospitals <br/> near you here!! <br/> And Book Appointments.</p>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-hospital-alt"></i>
                        <h5>Nearest NON-COVID Hospitals</h5>
                        <p>You can find the NON-COVID Hospitals near you here!! Book Appointments, Book Beds AND Make Payments.</p>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-briefcase-medical"></i>
                        <h5>COVID DETECTION</h5>
                        <p>Upload your covid test Report here!! And see the SEVERIRITY and possible precautions here</p>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-syringe"></i>
                        <h5>COWIN VACINATION</h5>
                        <p>Find places and slots that have <br/> COWIN VACINATION centers <br/> available in your localities.</p>
                    </div>
                </div>

           <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <h5> ChatBot </h5>
                        <p>24/7 <br/> live chat section <br/> available.</p>
                    </div>
                </div>



                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-comments"></i>
                        <h5> Social Section </h5>
                        <p>Here you can pass general medical related comments, questions and favors. Request for a fund raise and post medical requirements.</p>
                    </div>
                </div>
            </div> 

        </div>

    </section>
         {/*   <!-- ################# Footer Starts Here#######################---> */}
         <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <h2>About Us</h2>
                    <p>
                    Our sole motive is to improvise the Detection and Diagnosis of COVID-19 Using Medical Image Inception Using AI-Based ML and DL by Using Chest X-Rays.
                    </p>
                    <p>We focus on technologies that promise to reduce time and ease the functionalities of the patient in this severe Covid-19 Pandemic . </p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <h2>Useful Links</h2>
                    <ul class="list-unstyled link-list">
                        <li><a ui-sref="about" href="#/about">About us</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="gallery" href="#/gallery">Gallery</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="contact" href="#/contact">Contact us</a><i class="fa fa-angle-right"></i></li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 map-img">
                    <h2>Contact Us</h2>
                    <address class="md-margin-bottom-40">
                        ################# <br/>
                        ################# <br/>
                        ################# <br/>
                        Phone: ################# <br/>
                        Email: <a href="mailto:info@anybiz.com" class="">info@bluedart.in</a><br/>
                        Web: <a href="smart-eye.html" class="">www.bluedart.in</a>
                    </address>

                </div>
            </div>
        </div>
        

    </footer>
        </div>
    );
}

export default Services;