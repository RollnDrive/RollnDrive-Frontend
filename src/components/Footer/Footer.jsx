import './Footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
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
        <p>All Rights Reserved © | {year} RollNDrive</p>

        <div className="policies">
          <Link to="/refund-policy">
            <h6>Refund Policy</h6>
          </Link>

          <Link to="/terms-of-service">
            <h6>Terms of service</h6>
          </Link>
          <Link to="/shipping-policy">
            <h6>Shipping policy</h6>
          </Link>

          <Link to="/warranty-policy">
            <h6>Warranty</h6>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer