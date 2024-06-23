import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router navigation
import MyNavbar from '../../components/Navbar/MyNavbar';
import "./ThankYouPage.scss"

const ThankYouPage = () => {
  return (
    <div>
      <MyNavbar /> {/* Ensure to adjust this based on your project */}
      <div className='thankyou-container' style={{  }}>
        <h2>Thank You for Contacting Us!</h2>
        <p>We will get back to you soon.</p>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button id="gotohome" >
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
