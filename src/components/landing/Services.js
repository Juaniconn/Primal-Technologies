import React from 'react';

const Services = () => {
  const options = [
    { title: 'Legacy Code', icon: 'icon-align-right' },
    { title: 'Custom Software', icon: 'icon-document-code' },
    { title: 'Outsourcing', icon: 'icon-flow-switch' },
    { title: 'Mobile', icon: 'icon-phone' },
  ];

  return (
    <section id="Services" className="services">
      <div className="services_container">
        <div className="servicesTitleContainer">
          <p className="servicesTitle">Services</p>
        </div>
        <div className="servicesMenu">
          {options.map(option => {
            return (
              <div key={option.title} className="serviceItem">
                <i className={`${option.icon} serviceIcon`}></i>
                <p className="service_title">{option.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services