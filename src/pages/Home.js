import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/About';
import GlassCards from '../components/GlassCards'
import Benefits from '../components/Benefits'
import Info from '../components/Info';
import Team from '../components/Team';
import HomeLast from '../components/HomeLast.jsx';
import Marquee from '../components/Marquee.jsx';
import Loader from '../components/Loader.jsx';



const Home = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  
  return (
    <>
      
    {loading ? (<Loader />) : 
    (<>    
    <Navbar />    
      <Hero />
      <About />
      {/* <Marquee /> */}
      <Team />
      <GlassCards />
      <Benefits />
      <Info />
      <HomeLast />
      <Footer /></>)}
        </>
  )
}

export default Home;