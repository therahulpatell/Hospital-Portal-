import React from "react"
import {Link, useHistory} from "react-router-dom"

export const ContactUs = () => {
    let history = useHistory();
    const margin = {
        margin_top : "10px"
      };
      const padding = {
        padding_top : "10px"  
      }; 
     return (
        <div style = {{     flexWrap: 'wrap',
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

     
 {/*  <!-- ################# Our Team Starts Here#######################--->

<!--  ************************* Page Title Starts Here ************************** --> */}
<div class="page-nav no-margin row">
    <div class="container">
                <div class="row">
                     <h2>Contact Us</h2>
                     <ul>
                         <li> <a href="/home"><i class="fas fa-home"></i> Home</a></li>
                         <li><i class="fas fa-angle-double-right"></i> Contact Us</li>
                     </ul>
                </div>
    </div>
</div>
 
<div class="row contact-rooo no-margin">
        <div class="container">
           <div class="row">
               
          
            <div style={{padding:"20px"}} class="col-sm-6">
            <h2 style={{height:"50px", fontSize:"30px"}}>Contact Form</h2>
                <div class="row">
                    <div style={{padding}} class="col-sm-3"><label>Enter Name :</label></div>
                    <div class="col-sm-8"><input type="text" placeholder="Enter Name" name="name" class="form-control input-sm"  /></div>
                </div>
                <div style={{margin}} class="row">
                    <div style={{padding}} class="col-sm-3"><label>Email Address :</label></div>
                    <div class="col-sm-8"><input type="text" name="name" placeholder="Enter Email Address" class="form-control input-sm"  /></div>
                </div>
                 <div style={{margin}} class="row">
                    <div style={{padding}} class="col-sm-3"><label>Mobile Number:</label></div>
                    <div class="col-sm-8"><input type="text" name="name" placeholder="Enter Mobile Number" class="form-control input-sm"  /></div>
                </div>
                 <div style={{margin}} class="row">
                    <div style={{padding}} class="col-sm-3"><label>Enter  Message:</label></div>
                    <div class="col-sm-8">
                      <textarea rows="5" placeholder="Enter Your Message" class="form-control input-sm"></textarea>
                    </div>
                </div>
                 <div style={{margin}} class="row">
                    <div style={{padding}} class="col-sm-3"><label></label></div>
                    <div class="col-sm-8">
                     <button class="btn btn-danger btn-sm">Send Message</button>
                    </div>
                </div>
            </div>
             <div class="col-sm-6">
                    
                  <div style={{margin:"20px"}} class="serv"> 
             
          <h2 style={{margin, height:"60px"}}>Address</h2>

    ####### <br/>
    #######<br/>
    #######<br/>
    Phone:+91 ##########<br/>
    Email:#######<br/>
    Website:#######<br/>           
           </div>    
                
             
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