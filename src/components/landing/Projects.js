import React from 'react'
import Project1 from './../../img/portfolio_post1.jpg';

function Project() {

    return (
        <section id="Portfolio">
            <div className="container flex flex-d-col flex-jc-center flex-ai-center w-100">
                <h2 className="section-title brand fade-in-up">Projects</h2>
                <div className="flex flex-d-responsive flex-jc-center flex-ai-center w-100 white">
                    <div className="project_item flex flex-jc-center">
                        <div className="project_img" style={{ backgroundImage: `url(${Project1})` }}></div>
                        <div className="project_img" style={{ backgroundImage: `url(${Project1})` }}></div>
                    </div>
                    <div className="project_item flex flex-jc-center">
                        <div className="flex flex-d-col project_info">
                            <h2 className="project_title glitch-text" >Beautiful Night</h2>
                            <h2 className="project_title glitch-text" >Beautiful Night</h2>
                            <h2 className="project_title">Beautiful Night</h2>
                            <div className="project_rectangle" />
                            <div>
                                <p className="project_description glitch-text" style={{ width: '30%' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                                <p className="project_description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>

                            <div className="btn-highlight btn_marginTop">View More</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-jc-center w-100">
                    <div className="flex flex-jc-center project_nav">
                        <div className="project_nav_item"></div>
                        <div className="project_nav_item"></div>
                        <div className="project_nav_item"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Project