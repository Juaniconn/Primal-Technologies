import React from 'react';
import './../../App.css';
import Header from './../basic/Header'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Projects from './Projects/'
//import Exclusive from './Exclusive'
//import Values from './Values'
//import Testimonials from './Testimonials'
//import News from './News';
import Newsletter from './Newsletter'
import Contact from './Contact'
//import Map from './Map'
import Footer from './../basic/Footer'
import Headroom from 'react-headroom'

function Main() {
  return (
    <div className="App">
        <Headroom disableInlineStyles>
            <Header />
        </Headroom>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Newsletter />
        <Contact />
        <Footer />
        {/*<Testimonials/>
        <News/>*/}
    </div>
  );
}

export default Main;