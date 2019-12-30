import React from 'react';

const About = (props) => {

    return (
        <section id="About" className="bg-white">
            <div className="container flex flex-d-col">
                <h2 className="section-title black">About Studio</h2>
                <div className="content_container">
                    <div className="item">
                        <p className="brand special_text">It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.</p>
                        <p id="cite">– Charles Darwin</p>
                    </div>
                    <div className="item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;