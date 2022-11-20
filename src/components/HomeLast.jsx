import React from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import '../styles/HomeLast.css'
const HomeLast = () => {
  return (
    <div>
        <div className="creative container homeLast">
        <div className="left__side">
          <h1 className="Ultrabold">Let's</h1>
          <h1 className="Ultrabold">connect</h1>
        </div>
        <div className="right__side" style={{width: '70%'}}>
          <p style={{fontFamily: "Poppins, sans-serif",marginBottom:"2.2rem", fontSize: '1.4rem' ,lineHeight: "24px"}}>
          If you’re curious about us, we’re ready to answer any and all questions.
          </p>
          <motion.div initial={{ opacity: 0.6 }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }}>
          <Link to="/contact" className="btn-creative">
            Contact US
          </Link>
          </motion.div>
        </div>
      </div>

      <hr style={{width: '80vw', margin: 'auto'}}/>
    </div>
  )
}

export default HomeLast