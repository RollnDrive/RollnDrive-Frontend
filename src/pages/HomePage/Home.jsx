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
            <color attach="background" args={['#eaecee']} />
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

    </>
  );
}

export default Home;
