import React from 'react'

function Footer(){
    return(
        <footer className="footer">
          <div className="container">
            <img src="https://i.ibb.co/0C5VbpB/Primal-logo.png" alt=""/>
            <div className="footer_icons">
              <div className="footer_iconItem">
                <a href="#"><i className="icon-twitter"></i></a>
              </div>
              <div className="footer_iconItem">
                <a href="#"><i className="icon-youtube"></i></a>
              </div>
              <div className="footer_iconItem">
                <a href="#"><i className="icon-instagram"></i></a>
              </div>
              <div className="footer_iconItem">
                <a href="#"><i className="icon-facebook2"></i></a>
              </div>
              <div className="footer_iconItem">
                <a href="#"><i className="icon-linkedin"></i></a>
              </div>
            </div>
            <div className="footer_nav">
              <ul>
                <li><a href="#">Homa</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
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