import React from 'react'

function Services(){
    return(
        <div className="services">
          <div className="container">
            <h2>Services</h2>
            <div className="services_wrapperItem">
              <div className="services_item">
                <i className="icon-align-right"></i>
                <p>Legacy Code</p>
              </div>
              <div className="services_item">
                <i className="icon-cogs"></i>
                <p>Development</p>
              </div>
              <div className="services_item">
                <i className="icon-document-code"></i>
                <p>Software</p>
              </div>
              <div className="services_item">
                <i className="icon-flow-switch"></i>
                <p>Outsourcing</p>
              </div>
              <div className="services_item">
                <i className="icon-phone"></i>
                <p>Mobile</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Services