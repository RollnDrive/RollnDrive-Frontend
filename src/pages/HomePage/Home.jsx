import React from 'react';
import './Home.scss';
import MyNavbar from '../../components/Navbar/MyNavbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import Overlay from './Overlay';
import ProgressBar from '../../components/ScrollProgress/ProgessBar';

const Home = () => {
  return (
    <>
      <MyNavbar />
      <div className="homepage-container">
        <Canvas className='webgl'>
          <color attach="background" args={['#fff']} />
          <OrbitControls />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshNormalMaterial color="mediumpurple" />
          </mesh>
        </Canvas>
        <Overlay />
        <section></section>
        <ProgressBar/>
      </div>
    </>
  );
}

export default Home;
