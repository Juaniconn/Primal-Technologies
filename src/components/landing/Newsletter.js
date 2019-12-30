import React from 'react'

function Newsletter() {
  return (
    <section>
      <div className="container flex flex-d-col flex-ai-center">
        <h2 className="section-title white">Stay informed</h2>
        <div className="flex flex-d-col flex-ai-center w-100">
          <form className="w-100 nl_form">
            <input className="field nl_input" type="email" placeholder="Enter your email" />
            <input className="btn-contained nl_btn" type="submit" value="Subscribe" />
          </form>
          <p className="simple_advice white">*Trust us, we'll never send you spam</p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter