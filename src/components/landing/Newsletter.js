import React from 'react'

function Newsletter(){
    return(
        <div className="newsletter">
          <div className="container">
            <h2>Newsletter</h2>
            <form className="newsletter_form" action="" method="POST">
              <input className="newsletter_emailInput" type="email" placeholder="Enter your email"/>
              <input className="newsletter_btn" type="submit" value="Suscribe"/>
            </form>
            <p>*Trust us, we'll never send you spam</p>
          </div>
        </div>
    )
}

export default Newsletter