import './Footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="communicate">
        {/* <div className="communicate-container">
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
        </div> */}
        <div className="contact-container">
          <div className="left">
            <iframe
              id='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.9884541697681!2d73.82800480115826!3d18.635639587356817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9d2682a1951%3A0x6be65fd7643773b7!2sRollndrive!5e0!3m2!1sen!2sin!4v1719129802313!5m2!1sen!2sin"
              width="1200"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right">
            <h2>RollnDrive</h2>
            <address>
            PLOT PAP-128 J BLOCK MIDC,<br/> BEHIND SMITH INTERNATIONAL,<br/> Telco Road, NEAR QUALITY CIRCLE,<br/> Bhosari, Pimpri Chinchwad,<br/> Pune, Maharashtra, 411026.<br/> <b>GST no: 27BHMPC3508H1ZH</b><br/><br/>Mob no: +91 9637899174<br/>Email: <a href="mailto:vishal@rollndrive.com">vishal@rollndrive.com</a>

            </address>
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