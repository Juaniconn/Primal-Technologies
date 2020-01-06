import React from 'react';
import './App.css';
import Header from './components/basic/Header'
import Hero from './components/landing/Hero'
import About from './components/landing/About'
import Services from './components/landing/Services'
import Projects from './components/landing/Projects/'
//import Exclusive from './components/landing/Exclusive'
//import Values from './components/landing/Values'
//import Testimonials from './components/landing/Testimonials'
//import News from './components/landing/News';
import Newsletter from './components/landing/Newsletter'
import Contact from './components/landing/Contact'
//import Map from './components/landing/Map'
import Footer from './components/basic/Footer'
import Headroom from 'react-headroom'

function App() {
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

export default App;