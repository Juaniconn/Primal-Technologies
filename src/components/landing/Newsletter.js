import React from 'react'

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter_container">
        <div className="newsletter_title_container">
          <h2 className="newsletter_title">Stay informed</h2>
        </div>
        <div className="newsletter_form_container">
          <form className="newsletter_form">
            <input className="newsletter_emailInput" type="email" placeholder="Enter your email" />
            <input className="newsletter_btn" type="submit" value="Suscribe" />
          </form>
          <p className="simple_advice">*Trust us, we'll never send you spam</p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter