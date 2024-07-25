import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
   
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4a0fc836-d188-4787-9e96-f096e553a43c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };


    return (
        <div id= 'contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>
                    We'd love to hear from you! Whether you have questions about our services, need a quote, or want to schedule an appointment, the team at West Coast Rinse is here to assist you. Reach out to us today, and experience the exceptional customer service and professional care that sets us apart.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>salshan2145@gmail.com</p>
                    
                        </div>
                        <div className="contact-detail">
                           <img src={call_icon} alt="" /><p>6042678899</p>

                        </div>
                        <div className="contact-detail">
                           <img src={location_icon} alt="" /><p>11617 208 st Maple Ridge BC</p> 
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email'name='email'/>
                    <label htmlFor="">write your message here</label>
                    <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
                    <button type= 'submit' className="contact-submit">Submit now</button>
                    </form>
            </div>
         
        </div>
    )
}

export default Contact