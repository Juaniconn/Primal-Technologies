import React from 'react'

function Newsletter() {
  return (
    <section>
      <div className="container col newsletter_container">
        <div className="">
          <h2 className="section_title white">Stay informed</h2>
        </div>
        <div className="newsletter_form_container">
          <form className="newsletter_form">
            <input className="newsletter_emailInput" type="email" placeholder="Enter your email" />
            <input className="newsletter_btn" type="submit" value="Subscribe" />
          </form>
          <p className="simple_advice">*Trust us, we'll never send you spam</p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter