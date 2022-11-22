import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/Company.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import IMG1 from "../../assets/mohitMisra.jpg";

// import AnimatedCursor from "react-animated-cursor";
import { type } from "@testing-library/user-event/dist/type";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Human Resources",
    website: "https://www.cisco.com/c/en_in/index.html",    

  },  
];

const Hr = () => {
  return (
    <>
      {/* <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #fff",
        }}
      /> */}
      <Navbar />
      <motion.div
        animate={{ y: 0, opacity: 1, type: "spring" }}
        initial={{ opacity: 0.6, y: 310 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      >
        <div className="container container-top">
          <h1
            className="Ultrabold comp"
            style={{ marginTop: "8rem", marginBottom: "7rem" }}
          >
            HR Sector
          </h1>
        </div>
        <div className="container" style={{ marginBottom: "15%" }}>
          <section id="company">
            <div className="company-grid">
              
              {data.map(({ id,image, title }) => {
              return (
                <Link to = {`/hr/1`} key={id}>
                <div class="company_box" style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: '50%'
                }}>
                <div style={{display: 'flex'}}>
                  <h2 style={{ marginTop: "75%", marginLeft: "auto", marginRight: "auto" }}>
                    {title}
                  </h2></div>
                  <div class="overlay">
                    <div class="company_box_text">
                      <br />
                      <Link to = {`/hr/1`}
                        className="btn btn-primary"
                        style={{ fontSize: "0.8rem"}}
                      >
                        Guide
                      </Link>
                    </div>
                  </div>
                </div>
                </Link>
              );
            })}
              
            </div>
          </section>
        </div>
      </motion.div>
      <hr style={{width: '80vw', margin: 'auto'}}/>
      <Footer />
    </>
  );
};

export default Hr;
