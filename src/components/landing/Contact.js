import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'signup[name]': '',
      'signup[email]': '',
      'signup[mensaje]': ''
    };
    this.callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    this.validEmail = /.+@.+\..+/
  }

  serializeState = () => {
    const keys = [
      'signup[name]',
      'signup[email]',
      'signup[mensaje]'
    ];
    let q = [];
    for (let i = 0; i < keys.length; i++) {
      q.push(`${keys[i]}=${encodeURIComponent(this.state[keys[i]])}`);
    }
    q.push(`utf8=%E2%9C%93`)
    return q.join('&');
  }

  formatUrl = () => {
    const BASE = "https://gem.godaddy.com/signups/subscribe/00d35bdb1d6c41d0879bd39ff82837a1";
    return `${BASE}.json?callback=${this.callbackName}&${this.serializeState()}`;
  }

  validate = () => {
    const keys = Object.keys(this.state);
    for (let i = 0; i < keys.length; i++) {
      if (typeof this.state[keys[i]] !== 'string') return false;
      if (this.state[keys[i]].length <= 0) return false
    }
    return this.validEmail.test(this.state['signup[email]']);
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      const url = this.formatUrl();
      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
      };
      fetch(url, options)
        .then(resp => {
          console.log(resp);
        })
        .catch(err => console.log(err))
    }
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const contactOptions = [
      { icon: 'icon-whatsapp', title: 'Call Us', info: '+52 XXX XX XX' },
      { icon: 'icon-location', title: 'Address', info: 'XXXXX XXXX XXXX' },
      { icon: 'icon-envelope', title: 'Email', info: 'XXXX@XXX.com' },
    ];

    return (
      <section id="Contact" className="bg-white">
        <div className="container flex flex-d-responsive">
          <div className="container_item fade-in-up">
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
                  <div key={option.title} className="flex flex-ai-center icon_item">
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
            <form id="contact_form" action="" className="flex flex-d-col" onSubmit={this.onSubmit}>
              <input
                id="name-field"
                className="field form_item w-100 fade-in-down"
                name="signup[name]"
                type="text"
                placeholder="Name"
                onChange={this.onChange}
                required
              />
              <input
                id="email-field"
                className="field form_item w-100 fade-in-down"
                name="signup[email]"
                type="email"
                placeholder="Email"
                onChange={this.onChange}
                required
              />
              <textarea
                id="msg-field"
                className="field form_item w-100 fade-in-down"
                name="signup[mensaje]"
                placeholder="Message"
                onChange={this.onChange}
                cols="30"
                rows="6"
                required
              ></textarea>
              <input
                className="btn-contained form_item w-100 fade-in-down"
                name=""
                type="submit"
                value="Submit Message"
              />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

