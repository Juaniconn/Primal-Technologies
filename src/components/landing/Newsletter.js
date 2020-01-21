import React from 'react'

function Newsletter() {
  return (
    <section>
      <div className="container flex flex-d-col flex-ai-center zoom-in">
        <h2 className="section-title white">Looking for exclusive content?</h2>
        <p className="nl_description ta-center white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-d-col flex-ai-center w-100">
          <form className="w-100 nl_form">
            <input className="field nl_input" type="email" placeholder="Enter your email" required />
            <input className="btn-contained nl_btn" type="submit" value="Subscribe" />
          </form>
          <p className="simple_advice white">*Trust us, we'll never send you spam</p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter