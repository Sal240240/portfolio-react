import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footerlogo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
         <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p> Follow us on Facebook and Instagram.
For inquiries, call us at (123) 456-7890 or email info@westcoastrimse.com. Located in beautiful British Columbia, Canada.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
         </div>
         <hr />
         <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 West Coast Rinse. All Rights Reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
         </div>
        </div>
    )
}

export default Footer