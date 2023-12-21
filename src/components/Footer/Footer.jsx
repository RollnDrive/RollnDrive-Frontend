import './Footer.scss'

const Footer = () => {
  return (
    <div>
      <div className="communicate">
        <div className="communicate-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <h3><i className="fa-regular fa-envelope"></i> Send us a Message</h3>
            <p>Your feedback is the most valuable asset we hold. <br /> So we appreciate your effort of reaching out to us!!!</p>
          </div>

          <div className='right'>
            <form action="https://formsubmit.co/vishal@rollndrive.com" method="POST">
              <input type="text" name='message' placeholder='Your Message' required />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>All Rights Reserved © 2023 RollNDrive</p>

        <div className="policies">
          <h6>Refund Policy</h6>
          <h6>Terms of service</h6>
          <h6>Shipping policy</h6>
          <h6>Warranty</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer