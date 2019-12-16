import React from 'react'

function Newsletter(){
    return(
        <div className="newsletter">
          <div className="container">
            <h2>Newsletter</h2>
            <form action="" method="POST">
              <input className="newsletter_emailInput" type="email" placeholder="Enter your email"/>
              <input className="newsletter_btn" type="submit"/>
            </form>
          </div>
        </div>
    )
}

export default Newsletter