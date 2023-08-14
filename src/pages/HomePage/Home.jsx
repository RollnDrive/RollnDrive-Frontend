import React, { useEffect, useRef } from 'react';
import './Home.scss';
import MyNavbar from '../../components/Navbar/MyNavbar';
import LocomotiveScroll from 'locomotive-scroll';

const Home = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <MyNavbar />
      <div ref={scrollContainerRef} data-scroll-container>
      </div>
    </>
  );
}

export default Home;
