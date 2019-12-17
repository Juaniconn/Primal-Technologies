import React from 'react'

function Project(){
    return(
        <div className="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects_infoWrapper">
                    <div className="projects_gallery">
                        <div className="project_info-nav">
                            <p>1/5</p>
                            <div className="project_info-arrows">
                                <i className="icon-cheveron-down"></i>
                                <i className="icon-cheveron-down"></i>
                            </div>
                        </div>
                        <figure>
                            <div className="project_slideshow">
                                <div className="project_slideshowWrapper-images">
                                    <img src="https://i.ibb.co/YhwbKyN/post1.jpg" alt="project1"/>
                                    <img src="https://i.ibb.co/sV7tdjB/portfolio-photo3.jpg" alt="project2"/>
                                    <img src="https://i.ibb.co/YhwbKyN/post1.jpg" alt="project3"/>
                                    <img src="https://i.ibb.co/sV7tdjB/portfolio-photo3.jpg" alt="project4"/>
                                    <img src="https://i.ibb.co/YhwbKyN/post1.jpg" alt="project5"/>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className="projects_info">
                        <h3>A STARRY <br/> NIGTHT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolore eu fugiat nulla pariatur.</p>
                        <a href="#">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project