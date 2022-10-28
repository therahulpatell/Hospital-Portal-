import React from "react";
import { useHistory } from "react-router-dom";


export const Login = () => {
        let history = useHistory();
        
        return (
           
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button 
                onClick={()=> {
                    history.push("/home");
                    }}
                     type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    <br/>
                    
                <p className="text-center">Did not Register? 
                <a 
                onClick={()=>{history.push("/signup");
                }}><u style={{color:"blue"}} > SignUp here</u></a>
                </p>

                <h1 className="forgot-password text-right">
                    Forgot <a href="/#">password?</a>
                </h1>
                
            </form>
          
        );
    }
    export default Login;