import React from 'react'

function Footer(){
    return(
        <footer className="footer">
          <div className="container">
            <img src="" alt=""/>
            <div className="footer_icons">
              <div className="footer_iconItem"><i></i></div>
              <div className="footer_iconItem"><i></i></div>
              <div className="footer_iconItem"><i></i></div>
              <div className="footer_iconItem"><i></i></div>
              <div className="footer_iconItem"><i></i></div>
            </div>
            <div className="footer_nav">
              <ul>
                <li><a href="#">Homae</a></li>
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