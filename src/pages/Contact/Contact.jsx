import React from 'react'
import MyNavbar from '../../components/Navbar/MyNavbar'
import "./Contact.scss";

const Contact = () => {

  return (
    <div>
      <MyNavbar />
      <div className='contact-section'>

        <div className="form-container">
        <form action="https://formsubmit.co/vishal@rollndrive.com" method="POST">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
               
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
               
                
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                
                required
              />
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
            <input type="hidden" name="_next" value="https://www.rollndrive.com/thank-you" />
            <input type="hidden" name="_captcha" value="false" />
          </form>

        </div>
      </div>
    </div >
  )
}

export default Contact