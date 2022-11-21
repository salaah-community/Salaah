import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import AnimatedCursor from "react-animated-cursor";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Opportunity.css";

import IMG1 from "../assets/corporate.png";
import IMG2 from "../assets/soldier.png";
import IMG3 from "../assets/dancing.png";
import IMG4 from "../assets/startup.png";
import IMG5 from "../assets/hr.png";

const data = [
  {
    id: 11,
    link: "\company",
    image: IMG1,
    title: "Corporate",
    about:
      "Corporations contribute significantly to our economy and employ a large number of people. Learn about jobs of this sector & their few key factors.",
  },
  {
    id: 12,
    link: "\defence",
    image: IMG2,
    title: "Defence",
    about:
      "A career in the armed forces promises one of the most prestigious and respected positions in the country. It is a career full of excitement, adventure, and challenges.",
  },
  {
    id: 13,
    link: "\culture",
    image: IMG3,
    title: "Culture",
    about:
      "Millions of people rely on creative industries of all sizes. Finding your fit in this sector is dependent on your interests, passions, and your skills.",
  },
  {
    id: 14,
    link: "\startup",
    image: IMG4,
    title: "Startup",
    about:
      "Start-ups contribute to economic development & entrepreneurs generate new ideas, which are essential for constant innovation and competition.",
  },
  {
    id: 15,
    link: "\hr",
    image: IMG5,
    title: "HR",
    about:
      "These can help you gain insider knowledge of how the entire organisation operates, as well as the opportunity to participate in its development.",
  },
];

const Opportunity = () => {
  return (
    <div>
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
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      >
        <div className="container container-top cards-top-head">
          <h1
            className="Ultrabold comp"
            style={{ marginTop: "8rem", marginBottom: "7rem" }}
          >
            Opportunities
          </h1>
        </div>
        <div className="container"><section id="company">
          <div className="company-grid">
            {data.map(({ link,image, title, about }) => {
              return (
                <Link to = {`${link}`}>
                <div class="company_box" style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: '50%'
                }}>
                <div id="titleTrack"style={{display: 'flex'}}>
                  <h2 style={{ marginTop: "75%", marginLeft: "auto", marginRight: "auto" }}>
                    {title}
                  </h2></div>
                  <div class="overlay">
                    <div class="company_box_text">
                      <p>{about}</p><br />
                      <Link to = {`${link}`}
                        className="btn btn-primary"
                        style={{ fontSize: "0.8rem"}}
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
                </Link>
              );
            })}
          </div></section>
        </div>        
      </motion.div>      
      <br /><br />
      <hr style={{width: '80vw', margin: 'auto'}}/>
      <Footer />
    </div>
  );
};

export default Opportunity;
