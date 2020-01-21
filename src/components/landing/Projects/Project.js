import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Glitch from './Glitch';

class Project extends Component {
  render() {
    const { start, project, onTransition, onEnd } = this.props;
    const { title, description, img } = project;

    return (
      <div className="flex flex-d-responsive flex-jc-center flex-ai-center w-100 white">
        <Glitch
          containerId="projectImg"
          containerClassName="project_item flex flex-jc-center"
          variant="div"
          variantClassName="project_img"
          glitchType="glitch-img"
          data={{
            content: "",
            style: { backgroundImage: `url(${img || ""})` }
          }}
          start={start}
          onTransition={onTransition}
          onEnd={onEnd}
        />
        <div className="project_item flex flex-jc-center">
          <div className="flex flex-d-col project_info">
            <Glitch
              containerId="projectTitle"
              containerClassName="w-100"
              variant="h2"
              variantClassName="project_title"
              glitchType="glitch-text"
              data={{
                content: title || "",
                style: {}
              }}
              start={start}
              onTransition={onTransition}
              onEnd={onEnd}
            />
            <div className="project_rectangle" />
            <Glitch
              containerId="projectDescription"
              containerClassName="w-100"
              variant="p"
              variantClassName="project_description"
              glitchType="glitch-text"
              data={{
                content: description || "",
                style: {}
              }}
              start={start}
              onTransition={onTransition}
              onEnd={onEnd}
            />
            <div className="btn-highlight btn_marginTop" >
              <Link to="/projects">
                View More
              </Link>
            </div>
          </div>
        </div >
      </div>

    );
  }
}

export default Project;