import { useState } from 'react';
import './Home.scss';
import MyNavbar from '../../components/Navbar/MyNavbar';
import mdr from "../../assets/products/conveyor.png"
import brushless from "../../assets/products/brushless.png"
import controller from "../../assets/products/controller.png"
import gearbox from "../../assets/products/gearbox.png"
import geared from "../../assets/products/geared.png"
import { Link } from 'react-router-dom';
import video from "../../assets/video/video.mp4"
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [mobile, setMobile] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 800) {
      setMobile(true);
    }
  })



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
          <a href="/teams">OWNERS</a>
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
                <p className="product-info-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id consequatur dicta debitis corporis!</p>
                <div className="item-image">
                  <img src={mdr} alt="item" />
                </div>
                <Link to={"/products:mdr"}><button>Info</button></Link>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="card">
                  <h2>Brushless Motor</h2>
                  <p className="product-info-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta expedita ducimus minus aut!</p>
                  <div className="item-image">
                    <img src={brushless} alt="item" />
                  </div>
                  <button>Info</button>
                </div>
              </div>

              <div className="col">
                <div className="card">
                  <h2>Geared Motors</h2>
                  <p className="product-info-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id consequatur dicta debitis corporis!</p>
                  <div className="item-image">
                    <img src={geared} alt="item" />
                  </div>
                  <button>Info</button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="card">
                  <h2>Customised Motors</h2>
                  <p className="product-info-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id consequatur dicta debitis corporis!</p>
                  <div className="item-image">
                    <img src={gearbox} alt="item" />
                  </div>
                  <button>Info</button>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <h2>Motor Controller</h2>
                  <p className="product-info-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id consequatur dicta debitis corporis!</p>
                  <div className="item-image">
                    <img src={controller} alt="item" />
                  </div>
                  <button>Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        !mobile ? (
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
        ) : (
          <>
            <div className='section3-mobile'>
              <div className='benefit-title-mobile'>
                <h1>Why to opt for RollnDrive?</h1>
                <p>Discover the Power of Innovation in <br /> Material Handling and Motion Control</p>
              </div>
              <div className="benefits-container-mobile">
                <div className="benefit-card-mobile" id='card-energy'>
                  <h3>Energy Efficiency</h3>
                  <p>{`Roll and drive conveyor systems are known for their energy efficiency. These systems use motorized rollers strategically placed along the conveyor's length, which are activated only when needed. This on-demand operation helps reduce energy consumption, making them more environmentally friendly and cost-effective in the long run.`}</p>
                </div>
                <div className="benefit-card-mobile" id='card-maintenance'>
                  <h3>Less maintenance</h3>
                  <p>Roll and drive conveyors minimize energy consumption, reducing operational costs.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quisquam quaerat natus atque obcaecati, aut sunt? Eum minus enim ad veniam reprehenderit, illum earum ea laborum ipsam similique odit mollitia!
                  </p>
                </div>
                <div className="benefit-card-mobile" id='card-performance'>
                  <h3>High performance</h3>
                  <p>The conveyors offer consistent and reliable performance, improving productivity. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A accusantium corrupti nihil alias accusamus similique, sapiente explicabo est cum quidem id rem quisquam labore magni nesciunt eligendi quis nisi blanditiis.</p>
                </div>

                <div className="benefit-card-mobile" id='card-safety'>
                  <h3>Increased safety</h3>
                  <p>They enhance workplace safety by reducing the risk of accidents and injuries. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti architecto autem sit laudantium aliquid expedita impedit ullam voluptate adipisci nostrum, asperiores ex voluptatibus quasi maiores, eius ratione inventore molestiae? Quae.</p>
                </div>
                <div className="benefit-card-mobile" id='card-sound'>
                  <h3>Low sound</h3>
                  <p>Roll and drive conveyors operate quietly, creating a more comfortable work environment. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa labore illo repudiandae sequi itaque, amet architecto obcaecati autem, nesciunt doloremque cum dicta ducimus adipisci nemo, inventore facilis hic quos alias.</p>
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
          </>
        )
      }

      <Footer />
    </>
  );
}

export default Home;
