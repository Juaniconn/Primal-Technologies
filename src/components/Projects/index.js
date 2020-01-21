import React, { Fragment } from 'react';
import Header from './../basic/Header';
import Footer from './../basic/Footer';

import Project1 from './../../img/portfolio_post1.jpg';
import Project2 from './../../img/portfolio_post2.jpg';
import Project3 from './../../img/portfolio_post3.jpg';

import Project from './Project';

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

const Projects = (props) => {
  return (
    <Fragment>
      <Header />
      <div id="main_projects" className="white">Projects</div>
      <section className="bg-black white flex flex-d-col">
        <div className="container">
          {projects.map((project, i) => {
            return <Project project={project} index={i} />;
          })}
        </div>

      </section>
      <Footer />
    </Fragment>
  );
}

export default Projects;