import React from 'react'

const Hero = (props) => {
  return (
    <section id="Home" className="hero">
      <div className="hero_bg" />
      <div className="overlay" />
      <div className="container row">
        <div>
          <h1 id="hero_title" className="section_title brand_color">Transforming Companies</h1>
          <p className="section_subtitle white">The path for the future</p>
        </div>

        <div className="hero_btn">

          <a href="#About"><i className="hero_icon icon-cheveron-down fade_out"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero