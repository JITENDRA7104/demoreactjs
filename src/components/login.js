import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class login extends Component {
   render() {
      return (
        <div className="login-style tab-box">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-pad-0 bg-img none-992">
                        <div className="informeson">
                            <div className="logo-style">
                                <img src="images/logos/logo.png" alt="logo" />
                            </div>
                            <div className="btn-section">
                                <Link to="/" className="active link-btn">&nbsp;&nbsp;Login&nbsp;</Link>
                                <Link to="register" className="link-btn">Register</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-pad-0 form-section">
                        <div className="login-inner-form">
                            <div className="details">
                                <div className="col-md-12 heading-bx left" style={{paddingLeft:'0px',paddingRight:'0px'}}>
                                    <h3 className="title-head">Login into your account</h3>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <input type="email" name="email" className="input-text" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="Password" className="input-text" placeholder="Password" />
                                    </div>
                                    <div className="checkbox clearfix">
                                        <div className="form-check checkbox-theme">
                                            <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                            <label className="form-check-label" for="rememberMe">
                                                Remember me
                                            </label>
                                        </div>
                                        <Link to="forgot">Forgot Password</Link>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn-md btn-theme btn-block">LOGIN</button>
                                    </div>
                                    <p className="none-2">Don't have an account?<Link to="register"> Register here</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
   }
}
export default login