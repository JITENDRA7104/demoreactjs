import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class forgot extends Component {


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
                                <h3 className="title-head">Recover your password</h3>
                            </div>
                                <form>
                                    <div className="form-group">
                                        <input type="email" name="email" className="input-text" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn-md btn-theme btn-block">Submit</button>
                                    </div>
                                    <p className="none-2">Already a member?<a href="login-3.html"> Login here</a></p>
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
export default forgot