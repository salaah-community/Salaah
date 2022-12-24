import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/Opportunity.css";
import TabComponent from "../components/TabComponent.jsx";


const Opportunity = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      >
        <div className="container container-top cards-top-head">
          <h1
            className="Ultrabold comp"
            style={{ marginTop: "1rem", marginBottom: "7rem" }}
          >
            Opportunities
          </h1>
          <TabComponent />
        </div>
      </motion.div>      
      <br /><br />
      <hr style={{width: '80vw', margin: 'auto'}}/>
      <Footer />
    </div>
  );
};

export default Opportunity;
