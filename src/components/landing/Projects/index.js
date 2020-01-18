import React, { Component } from 'react';
import Project from './Project';
import Project1 from './../../../img/portfolio_post1.jpg';
import Project2 from './../../../img/portfolio_post2.jpg';
import Project3 from './../../../img/portfolio_post3.jpg';

const placeholderText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur.
`;

let projects = [
  { img: Project1, title: 'Beautiful Night', description: placeholderText, link: '#' },
  { img: Project2, title: 'Explosive Boy', description: placeholderText, link: '#' },
  { img: Project3, title: 'Dancing in the Water', description: placeholderText, link: '#' },
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ourProjects: [],
      current: 0,
      startTransition: false,
      nextSlide: 0,
    };
  }

  componentDidMount() {
    const projectLoaded = projects.map(project => {
      const img = new Image();
      img.src = project.img;
      projects.img = img.src;
      return project;
    });
    this.setState({ ourProjects: projectLoaded });
  }

  onStartTransition = (index) => {
    this.setState({ startTransition: true, nextSlide: index });
  }

  onTransition = () => {
    this.setState({ current: this.state.nextSlide });
  }

  onEnd = () => {
    this.setState({ startTransition: false });
  }

  render() {
    const { ourProjects, current, nextSlide, startTransition } = this.state;

    if (ourProjects.length > 0) {
      return (
        <section id="Portfolio">
          <div className="container flex flex-d-col flex-jc-center flex-ai-center w-100">
            <h2 className="section-title brand fade-in-up">Projects</h2>
            <Project
              project={ourProjects[current]}
              start={startTransition}
              onTransition={this.onTransition}
              onEnd={this.onEnd}
            />
            <div className="flex flex-jc-center w-100">
              <div className="flex flex-jc-center project_nav">
                {ourProjects.map((project, i) => {
                  return (
                    <div
                      key={i}
                      className={`project_nav_item ${(i === nextSlide) ? "active_item" : ""}`}
                      onClick={() => this.onStartTransition(i)}
                    />
                  );
                })}
              </div>

            </div>
          </div>
        </section >
      );
    }
    return null;
  }
}

export default Projects;