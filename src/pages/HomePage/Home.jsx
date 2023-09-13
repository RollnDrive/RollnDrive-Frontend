import React from 'react';
import './Home.scss';
import MyNavbar from '../../components/Navbar/MyNavbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import Overlay from './Overlay';
import ProgressBar from '../../components/ScrollProgress/ProgessBar';
import MiddleGear from '../../components/MiddleGear/MiddleGear';
import mdr from "../../assets/products/conveyor.png"
import brushless from "../../assets/products/brushless.png"
import controller from "../../assets/products/controller.png"
import gearbox from "../../assets/products/gearbox.png"
import geared from "../../assets/products/geared.png"
import energy from "../../assets/images/energy.png"

const Home = () => {
  return (
    <>
      <MyNavbar />
      <div className="homepage-container">
        <div>
          <Overlay />
        </div>
        <div>
          <Canvas className='webgl'>
            <color attach="background" args={['#fff']} />
            <OrbitControls enablePan={false} enableZoom={false} />
            <MiddleGear />
            <ambientLight />
          </Canvas>
        </div>
        <ProgressBar />
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
                <div className="item-image">
                  <img src={mdr} alt="item" />
                </div>
                <button>Info</button>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="card">
                  <h2>Brushless Motor</h2>
                  <div className="item-image">
                    <img src={brushless} alt="item" />
                  </div>
                  <button>Info</button>
                </div>
              </div>

              <div className="col">
                <div className="card">
                  <h2>Geared Motors</h2>
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
                  <h2>Gearboxes</h2>
                  <div className="item-image">
                    <img src={gearbox} alt="item" />
                  </div>
                  <button>Info</button>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <h2>Motor Controller</h2>
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

      <div className='section3'>
        <div className='benefit-title'>
          <h1>Benefits of MDR Conveyors</h1>
          <p>Featuring the latest and most advanced <br /> innovations in the conveyor industry</p>
        </div>


        <div className="benefits-container">
          <div className="left">
            <div className="benefit-card">
              <h3>Energy Efficiency</h3>
              <p>Roll and drive conveyor systems are known for their energy efficiency. These systems use motorized rollers strategically placed along the conveyor's length, which are activated only when needed. This on-demand operation helps reduce energy consumption, making them more environmentally friendly and cost-effective in the long run.</p>
            </div>
          </div>
          <div className="right">
            <div className="row">
              <div className="benefit-card" id='card-maintenance'>
                <h3>Less maintenance</h3>
                <p>Roll and drive conveyors minimize energy consumption, reducing operational costs.</p>
              </div>
              <div className="benefit-card" id='card-performance'>
                <h3>High performance</h3>
                <p>The conveyors offer consistent and reliable performance, improving productivity.</p>
              </div>
            </div>

            <div className="row">
              <div className="benefit-card" id='card-safety'>
                <h3>Increased safety</h3>
                <p>They enhance workplace safety by reducing the risk of accidents and injuries.</p>
              </div>
              <div className="benefit-card" id='card-sound'>
                <h3>Low sound</h3>
                <p>Roll and drive conveyors operate quietly, creating a more comfortable work environment.</p>
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
    </>
  );
}

export default Home;
