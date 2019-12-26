import React from 'react';

const Services = () => {
  const options = [
    { title: 'Legacy Code', icon: 'icon-align-right' },
    { title: 'Custom Software', icon: 'icon-document-code' },
    { title: 'Outsourcing', icon: 'icon-flow-switch' },
    { title: 'Mobile', icon: 'icon-phone' },
  ];

  return (
    <section id="Services">
      <div className="container col services_container">
        <div>
          <p className="section_title brand_color">Services</p>
        </div>
        <div className="servicesMenu white">
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