import React from 'react';
import './Home.scss';
import MyNavbar from '../../components/Navbar/MyNavbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import Overlay from './Overlay';
import ProgressBar from '../../components/ScrollProgress/ProgessBar';
import MiddleGear from '../../components/MiddleGear/MiddleGear';

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
    </>
  );
}

export default Home;
