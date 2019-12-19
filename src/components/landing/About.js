import React from 'react';

const About = (props) => {

    return (
        <section id="About" className="about_us">
            <div className="about_us_container">
                <h2 className="aboutTitle">About Studio</h2>
                <div className="contentContainer">
                    <div className="special_item">
                        <p className="special_text">It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.</p>
                        <p>– Charles Darwin</p>
                    </div>
                    <div className="content_item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="content_item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;