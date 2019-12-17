import React from 'react'

function Testimonials(){
    return(
        <div className="testimonials">
          <div className="container">
            <h2>Testimonials</h2>
            <div className="testimonials_itemsWrapper">
              <div className="testimonials_items">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <i className="testimonial_item_arrow"></i>
                <i className="testimonial_item_arrow"></i>
              </div>
              <div className="testimonial_users">
                <div className="testimonial_username">
                  <p>Barry Allen</p>
                  <p>Cisco Ramon</p>
                  <p>Ralph Diphny</p>
                </div>
                <div className="testimonial_navbar">
                  <div className="testimonial_bar"></div>
                  <div className="testimonial_bar"></div>
                  <div className="testimonial_bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Testimonials