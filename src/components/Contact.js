import React from 'react'

function Contact(){
    return(
        <div className="contact">
          <div className="container">
            <h2>Contact</h2>
            <div className="contact_iconsWrapper">
              <div className="contact_item">
                <i></i>
                <h3>Call Us</h3>
                <p>+52 XXX XX XX</p>
              </div>
              <div className="contact_item">
                <i></i>
                <h3>Address</h3>
                <p>+52 XXX XX XX</p>
              </div>
              <div className="contact_item">
                <i></i>
                <h3>Email</h3>
                <p>+52 XXX XX XX</p>
              </div>
            </div>
            <div className="contact_formWrapper">
              <form action="" className="contact_form">
                <input type="text" name="" id="" placeholder="Name" required/>
                <input type="email" name="" id="" placeholder="Email" required/>
                <textarea name="" id="" placeholder="Message" cols="30" rows="10"></textarea>
                <p>*All the fields are required</p>
                <input type="submit" value="Submit Message"/>
              </form>
            </div>
          </div>
        </div>
    )
}

export default Contact
