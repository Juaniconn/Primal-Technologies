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
      <div className="container flex flex-d-col flex-ai-center">
        <div>
          <h2 className="section-title brand">Services</h2>
        </div>
        <div className="services_menu flex-ai-center white">
          {options.map(option => {
            return (
              <div key={option.title} className="flex flex-d-col flex-ai-center service_item">
                <i className={`${option.icon} service_icon`}></i>
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