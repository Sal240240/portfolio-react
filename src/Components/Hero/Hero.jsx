import React from 'react'
import './Hero.css'
import profile_img from '../../assets/mountain.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className= 'hero'>
          <img src={profile_img} alt="" />
           <h1><span>West Coast Rinse</span>, Professional Detailers</h1>
           <p>We are an exterior Detailing Company from Vancouver, British Colombia</p>
           <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Us</AnchorLink></div>
            <div className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#testimonials'>Our Testimonials</AnchorLink></div>
           </div>
        </div>
    )
}

export default Hero