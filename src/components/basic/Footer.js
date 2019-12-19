import React from 'react'

function Footer() {
  const icons = [
    { icon: 'icon-twitter' },
    { icon: 'icon-youtube' },
    { icon: 'icon-instagram' },
    { icon: 'icon-facebook2' },
    { icon: 'icon-linkedin' },
  ];

  const footerLinks = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Services' },
    { name: 'Portfolio' },
    { name: 'Contact' },
  ]

  return (
    <footer className="footer">
      <div className="footer_container">
        <img src="https://i.ibb.co/0C5VbpB/Primal-logo.png" alt="" />
        <div className="footer_icons">
          {icons.map((icon, i) => {
            return (
              <div key={i} className="footer_iconItem">
                <a href="/"><i className={icon.icon}></i></a>
              </div>
            );
          })}
        </div>
        <div className="footer_nav">
          <ul>
            {footerLinks.map(link => {
              return (
                <li key={link.name}>
                  <a href={`#${link.name}`}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer_copyright">
          <p>© PRIMAL TECHNOLOGIES 2019</p>
          <p>Made with love by greatest people</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer