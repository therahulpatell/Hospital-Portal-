import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Components/login.js";
import SignUp from "./Components/signup.js";

import Home from "./home";
import { AboutUs } from "./AboutUs";
import Services from "./services";
import { ContactUs } from "./ContactUs";
import SimpleForm from "./Components/chatbot/SimpleForm.js";
import UploadImg from "./upload.js";

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/AboutUs' exact component={AboutUs} />
          <Route path='/services' exact component={Services} />
          <Route path='/ContactUs' exact component={ContactUs} />
          <Route path='/upload' exact component={UploadImg} />

          <div className='outer'>
            <div className='inner'>
              <Route exact path='/' component={Login} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path='/SimpleForm' component={SimpleForm} />
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}
