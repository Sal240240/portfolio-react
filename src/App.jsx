import React from 'react'
import Navbar from './Components/Nav Bar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
    return (
        <div>
          <Navbar/>
          <Hero/>
          <About/>
          <Services/>
          <Testimonials/>
          <Contact/>
          <Footer/>
        </div>
    )
}

export default App