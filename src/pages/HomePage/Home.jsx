import './Home.scss';
import MyNavbar from '../../components/Navbar/MyNavbar';
import { Link } from 'react-router-dom';
import video from "../../assets/video/video.mp4"
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <MyNavbar />
      <div className="homepage-container">
        <video autoPlay muted loop id="bgVideo">
          <source src={video} type="video/mp4" />
        </video>
        <div className='overlay'>
          <p>Streamline your production with our advanced conveyor systems - the backbone of modern manufacturing.</p>
          <h1>WE BUILD RELIABLE & PROMINENT CONVEYOR SOLUTIONS</h1>
          <a href="/teams">Meet Our Team</a>
        </div>
      </div>

      <div className='section2'>
        <h1>
          Browse our collection of <br /> our high end <span>equipments</span>
        </h1>

        <div className='items'>
          <div className="item-container">
            <div className="row">
              <div className="mdr-card">
                <h2>Motor Driven Roller</h2>
                <p className="product-info-sm">A Motor Driven Roller ( MDR ) is a type of conveyor roller that incorporates an integrated brushless dc motor within the roller body. </p>
                <div className="item-image">
                  <img src={"https://i.ibb.co/Z6v1Bpy/80mm-MDR-Photo-Room-png-Photo-Room.png"} alt="item" />
                </div>
                <Link to={"/products:mdr"}><button>Info</button></Link>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="card">
                  <h2>Brushless Motor</h2>
                  <p className="product-info-sm">These innovative motors are revolutionizing various industries, offering improved efficiency.</p>
                  <div className="item-image">
                    <img src={"https://i.ibb.co/sb5P5tr/Brushless-Motors-wire-Photo-Room-png-Photo-Room.png"} alt="item" />
                  </div>
                  <Link to={"/products:brushlessmotor"}><button>Info</button></Link>
                </div>
              </div>

              <div className="col">
                <div className="card">
                  <h2>Geared Motors</h2>
                  <p className="product-info-sm">Engineered for precision and efficiency, these motors combine the reliability of brushless technology.</p>
                  <div className="item-image">
                    <img src={"https://i.ibb.co/SNnzBb2/Brushless-Geared-Motors-w-IRE.png"} alt="item" />
                  </div>
                  <Link to={"/products:gearedmotor"}><button>Info</button></Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="card">
                  <h2>Customised Motors</h2>
                  <p className="product-info-sm">Our customized geared motors are meticulously crafted to deliver optimal efficiency, reliability.</p>
                  <div className="item-image">
                    <img src={"https://i.ibb.co/t8QB6Rg/Customised-Geared-Motors-wire.png"} alt="item" />
                  </div>
                  <Link to={"/products:customized-geared-motors"}><button>Info</button></Link>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <h2>Motor Controller</h2>
                  <p className="product-info-sm">Our Brushless Motor Controller, a cutting-edge solution that enhances the efficiency.</p>
                  <div className="item-image">
                    <img src={"https://i.ibb.co/1sPFfRw/BLD-300-B-BLDC-driver.png"} alt="item" />
                  </div>
                  <Link to={"/products:motorcontroller"}><button>Info</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section3'>
        <div className='benefit-title'>
          <h1>Why to opt for RollnDrive?</h1>
          <p>Discover the Power of Innovation in <br /> Material Handling and Motion Control</p>
        </div>


        <div className="benefits-container">
          <div className="left">
            <div className="benefit-card" id='card-energy'>
              <h3>Motor Driven Rollers (MDR)</h3>
              <p>Effortless Precision: MDR technology ensures seamless and precise material handling, optimizing your production flow.
                Energy Efficiency: Experience significant energy savings with our MDRs, contributing to a greener and more sustainable operation.
                Low Maintenance: Robust construction and intelligent design minimize downtime, reducing maintenance costs over the long term.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="row">
              <div className="benefit-card" id='card-maintenance'>
                <h3>Brushless Motors</h3>
                <p>High performance, longevity, reduced noise & vibration: Our brushless motors deliver superior, maintenance-free operation, ensuring a quiet and smooth workplace experience.
                </p>
              </div>
              <div className="benefit-card" id='card-performance'>
                <h3>Brushless Geared Motors
                </h3>
                <p>Compact Design, Powerful Output: Benefit from the combination of brushless technology and precision gearing, providing a compact yet powerful solution for your applications.</p>
              </div>
            </div>

            <div className="row">
              <div className="benefit-card" id='card-safety'>
                <h3>Increased safety</h3>
                <p>They enhance workplace safety by reducing the risk of accidents and injuries.</p>
              </div>
              <div className="benefit-card" id='card-sound'>
                <h3>Customizable Gearboxes
                </h3>
                <p>Our range of gearboxes can be customized to meet the most intricate specifications, including Dual Shaft Gearboxes, Planetary with Spur, Transaxle, and Swerve Drive options.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className='benefit-footer'>
          <div className="left">
            <h3>Customization Options</h3>
            <p>Whether you need a conveyor for a particular product size, shape, or weight, these systems can be tailored to your needs.</p>
          </div>

          <div className='right'>
            <p>Better return on investment for businesses</p>
            <p>Roll and drive conveyor systems offer a range of benefits, including energy efficiency, low maintenance requirements, high performance, increased safety, reduced noise levels, customization options, space efficiency, and durability. These advantages make them a valuable choice for businesses looking to optimize their conveyor solutions and improve their overall operations.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
