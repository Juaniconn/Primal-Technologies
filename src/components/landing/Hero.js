import React from 'react'

const Hero = (props) => {
  return (
    <section id="Home" className="hero">
      <div className="hero_bg" />
      <div className="overlay" />
      <div className="hero_container">
        <div className="hero_main">
          <h1 className="hero_title">Transforming Companies</h1>
          <p className="hero_subtitle">The path for the future</p>
        </div>

        <div className="hero_btn">
          <i className="hero_icon icon-cheveron-down fade_out"></i>
          <a href="#About"></a>
        </div>
      </div>
    </section>
  );
};

export default Hero