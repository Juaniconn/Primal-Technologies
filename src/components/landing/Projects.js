import React from 'react'
import Project1 from './../../img/portfolio_photo1.jpg';

function Project() {
    const previous = () => {
        console.log('previous');
    };

    const next = () => {
        console.log('next');
    };

    return (
        <section id="Portfolio">
            <div className="container flex flex-d-col flex-jc-center flex-ai-center w-100">
                <h2 className="section-title brand">Projects</h2>
                <div className="projects_wrapper">
                    <div onClick={previous}>
                        <i className="icon-chevron-small-left project_icons"></i>
                    </div>
                    <div className="projects_container">
                        <div className="project_item project_img_border">
                            <img className="project_img" src={Project1} alt="Project1" />
                        </div>
                        <div className="project_item">
                            <h2 className="project_title">Project 1</h2>
                            <div className="project_rectangle" />
                            <p className="project_description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <div className="project_btn">View More</div>
                        </div>
                    </div>
                    <div onClick={next}>
                        <i className="icon-chevron-small-right project_icons"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project