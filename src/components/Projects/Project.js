import React from 'react';

const Img = ({ img }) => (
  <div className="project_img" style={{ backgroundImage: `url(${img})`, height: 600 }} />
);

const Info = ({ title, description }) => (
  <div className="project_item flex flex-jc-center">
    <div className="flex flex-d-col project_info">
      <h2 className="project_title" style={{ fontSize: '5rem' }}>{title}</h2>
      <div className="project_rectangle" />
      <p className="project_description">{description}</p>
    </div>
  </div >
);

const Project = ({ project, index }) => {
  return (
    <div className="flex flex-d-responsive flex-jc-center flex-ai-center w-100 white" style={{ margin: '100px 0px' }}>
      {(index % 2 === 0) ? <Img img={project.img} /> : <Info title={project.title} description={project.description} />}
      {(index % 2 === 0) ? <Info title={project.title} description={project.description} /> : <Img img={project.img} />}
    </div>
  );
}

export default Project;