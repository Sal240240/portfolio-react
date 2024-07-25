import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/aboutprofile.png'

const About = () => {
    return (
        <div id='about'  className='about'>
            <div className="about-title">
                <h1>About Us</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                
                <div className="about-right">
                    <div className="about-para">
                        <p>West Coast Rinse is a leading exterior detailing company in British Columbia, offering expert window cleaning, gutter maintenance, and pressure washing services for both residential and commercial properties. Our skilled team uses state-of-the-art equipment and eco-friendly solutions to ensure your buildings look pristine and well-maintained. We pride ourselves on delivering outstanding results and exceptional customer service, enhancing the curb appeal and longevity of your property.</p>
                        <p>
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Window Washing</p><hr style= {{width:"50%"}} /></div>
                        <div className="about-skill"><p>Pressure Washing</p><hr style= {{width:"70%"}} /></div>
                        <div className="about-skill"><p>Gutter Cleaning</p><hr style= {{width:"40%"}} /></div>
                        <div className="about-skill"><p>Sunroof Cleaning</p><hr style= {{width:"60%"}} /></div>
                    </div>
                </div>
            </div>
          <div className="about-achievements">
            <div className="about-achievement">
                <h1>100+</h1>
                <p>Happy Customers</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1> 95%+</h1>
                <p>Approval Rating</p>
            </div>
          </div>
          </div>
    )
}

export default About