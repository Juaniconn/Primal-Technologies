import React from 'react';

const About = (props) => {

    return (
        <section id="About" className="about_us">
            <div className="container col">
                <h2 className="section_title black">About Studio</h2>
                <div className="contentContainer">
                    <div className="special_item">
                        <p className="brand_color">It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.</p>
                        <p id="cite" className="section_subtitle">– Charles Darwin</p>
                    </div>
                    <div className="section_subtitle">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="section_subtitle black">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;