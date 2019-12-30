import React from 'react'

const Hero = (props) => {
  return (
    <section id="Home">
      <div className="hero_bg" />
      <div className="overlay" />
      <div className="container flex flex-d-row flex-jc-center ta-center">
        <div>
          <h1 id="hero_title" className="brand">Transforming Companies</h1>
          <p id="hero_subtitle" className="white">The path for the future</p>
        </div>

        <div className="hero_btn">
          <a href="#About">
            <i className="hero_icon icon-cheveron-down fade_out"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero