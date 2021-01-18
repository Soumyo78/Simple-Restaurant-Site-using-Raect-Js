import './style.css';
import React from 'react';


class ContactUs extends React.Component{

    render(){
        return(
            <div className="contact-us-div-container">
                <div className="contact-us-content-container">
                    <div className="contact-us-title-container">Contact Us</div>
                    <div className="contact-us-content">
                        <form className="form-container">
                            <div className="name-input-container">
                                <input className="input-field" type="text" name="first name" placeholder="First Name"/>
                                <input className="input-field" type="text" name="last name" placeholder="Last Name"/>
                            </div>
                            <div className="mobile-no-input-container">
                                <input id="mobile-no-input-field" className="input-field" type="text" name="mobile number" placeholder="Mobile No."/>
                            </div>
                            <label id="text-area-label">Please enter your message below.</label>
                            <div className="text-area-input-container">
                                <textarea cols="30" rows="10"></textarea>
                            </div>
                            <div className="submit-btn-container">
                                <input id="submit-btn" type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;