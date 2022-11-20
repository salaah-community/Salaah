import React, { useEffect } from 'react';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <motion.div className="hero-container" initial={{ y: 310 }}
    animate={{ y: 0 }}
    transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
    >
        <div className="hero-head">
          <h1 className="Ultrabold hello">Design the Future</h1>
        </div>
        <div className="Regular container hero-content">
          <p className="hero-content-text">Connecting our current students with the alumni to recieve career guidance.</p>
          <div>
            <Link to="/opportunities" className="btn">Enter Now!</Link>
          </div>
        </div>
    </motion.div>
  )
}

export default Hero





