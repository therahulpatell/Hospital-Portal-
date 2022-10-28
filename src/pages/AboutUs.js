import React from "react"
import {Link} from "react-router-dom"
import { useHistory } from "react-router";

export const AboutUs = () => {
    let history = useHistory();
   return(
        <div style = {{flexWrap: 'wrap',
            marginRight: '-15px',
            marginLeft: '-15px',position:"relative", left:"-5px", top:"2px"}}>
                
                {/* <!-- ################# Header Starts Here#######################---> */}
 
                <header>
         <div class="header-top">
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

    <div class="page-nav no-margin row">
                   <div class="container">
                       <div class="row">
                           <h2>About Us</h2>
                           <ul>
                               <li> <a href="/home"><i class="fas fa-home"></i> Home</a></li>
                               <li><i class="fas fa-angle-double-right"></i> About Us</li>
                           </ul>
                       </div>
                   </div>
    </div>

    <div class="about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <img src="assets/images/blog/blog_01.jpg" alt=""/>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <h2>Welcome to Hospital Portal</h2>
                            <p> Our sole motive is to improvise the Detection and Diagnosis of COVID-19 Using Medical Image Inception Using AI-Based ML and DL by Using Chest X-Rays.</p>
                            <p> With Us the User can securely Sign-in/Sign-up and he/she can find/filter/sort nearby non-covid hospitals based on essential parameters like location, distance, etc and can book Appointment,Beds and Vaccination Slots too and make payments too for the same. It also has an Assistance ChatBot for the user to chat. </p>
                            <p> The users raise their medical needs for e.g. Remdesivir injection, plasma donor, or any covid related drug with prescription only and Initiating crowdfunding or raising campaigns for fund based requirements. </p>
                            
                        </div>
                    </div>
                    
                </div>
    </div>

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