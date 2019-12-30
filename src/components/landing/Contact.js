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
    <section id="Contact" className="bg-white">
      <div className="container flex flex-d-responsive">
        <div className="container_item">
          <h2 className="section-title reset_margin_bot ta-center">Contact Us</h2>
          <div className="flex flex-jc-center">
            <div className="rectangle" />
          </div>
          <div className="contact_content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="flex flex-jc-center flex-ai-center icons_container">
            {contactOptions.map(option => {
              return (
                <div className="flex flex-ai-center icon_item">
                  <i className={`${option.icon} icon`}></i>
                  <div className="icon_text">
                    <h3>{option.title}</h3>
                    <p>{option.info}</p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
        <div className="container_item">
          <form action="" className="flex flex-d-col">
            <input id="name-field" className="field form_item w-100" type="text" placeholder="Name" required />
            <input id="email-field" className="field form_item w-100" type="email" placeholder="Email" required />
            <textarea id="msg-field" className="field form_item w-100" placeholder="Message" cols="30" rows="6"></textarea>
            <input className="btn-contained form_item w-100" type="submit" value="Submit Message" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
