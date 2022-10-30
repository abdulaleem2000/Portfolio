import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonial/testimonial'
import Footer from './components/footer/footer'
import Services from './components/services/services'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
const App = () => {
  return (
    <>
        <Header></Header>
        <Nav></Nav>
        <About></About>
        <Experience></Experience>
        <Portfolio></Portfolio>
        
        <Contact></Contact>
        <Footer></Footer>


    </>
  )
}

export default App