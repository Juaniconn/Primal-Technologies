import React from 'react';
import useWindowSize from './../utils/useWindowSize';

function Contact() {
  const [width, height] = useWindowSize();

  const contactOptions = [
    { icon: 'icon-whatsapp', title: 'Call Us', info: '+52 XXX XX XX' },
    { icon: 'icon-location', title: 'Address', info: 'XXXXX XXXX XXXX' },
    { icon: 'icon-envelope', title: 'Email', info: 'XXXX@XXX.com' },
  ];

  return (
    <section id="Contact">
      <div className={`container ${width < 760 ? 'col' : 'row'} contact_container`}>
        <div className="container_item">
          <h2 className="section_title contact_title">Contact Us</h2>
          <div className="rectangle" />
          <div>
            <p className="section_subtitle contact_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="container_item">
          <form action="" className="contact_form">
            <input className="form_item field" type="text" name="" id="" placeholder="Name" required />
            <input className="form_item field" type="email" name="" id="" placeholder="Email" required />
            <textarea className="form_item field" name="" id="" placeholder="Message" cols="30" rows="5"></textarea>
            <input className="form_item form_btn" type="submit" value="Submit Message" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
