import React from 'react';
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Exclusive from './components/Exclusive'
import Values from './components/Values'
import Testimonials from './components/Testimonials'
import News from './components/News';
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Map from './components/Map'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Exclusive/>
      <Values/>
      <Testimonials/>
      <News/>
      <Newsletter/>
      <Contact/>
      <Map/>
      <Footer/>
  </div>
  );
}

export default App;
