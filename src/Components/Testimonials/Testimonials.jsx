import React from 'react'
import './Testimonials.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'



const Testimonials = () => {
    return (
        <div id= 'testimonials' className='testimonials'>
        <div className="testimonials-title">
            <h1>Testimonials</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="testimonials-container">
            {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="testimonials-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
    )
}

export default Testimonials