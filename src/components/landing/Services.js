import React from 'react';
import {withRouter} from 'react-router-dom' 

const Services = (props) => {
  const { history } = props;

  const options = [
    { title: 'Legacy Code', icon: 'a', link: "/legacy" },
    { title: 'Custom Software', icon: 'b', link: "/software" },
    { title: 'Outsourcing', icon: 'c', link: "/outsourcing" },
    { title: 'Mobile', icon: 'd', link: "/mobile" },
  ];

  return (
    <section id="Services">
      <div className="container flex flex-d-col flex-ai-center">
        <div>
          <h2 className="section-title brand fade-in-up">Services</h2>
        </div>
        <div className="services_menu flex-ai-center white">
          {options.map(option => {
            return (
              <div onClick={
                () => history.push(option.link)
              }    
              key={option.title} className={`flex flex-d-col flex-ai-center service_item zoom-in-bounce ${option.icon}`}
              >
                {/* <i className={`${option.icon} service_icon`}></i> */}
                <p className="service_title">{option.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default withRouter(Services)