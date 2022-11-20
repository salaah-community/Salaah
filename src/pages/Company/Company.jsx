import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/Company.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import IMG1 from "../../assets/Cisco-logo.png";
import IMG2 from "../../assets/amazon-logo.png";
import IMG3 from "../../assets/gold-logo.png";
import IMG4 from "../../assets/infosys-logo.png";
import IMG5 from "../../assets/synopsys-logo.png";
import IMG6 from "../../assets/tcs-logo.png";
import IMG7 from "../../assets/new-cogni-logo.png";
import IMG8 from "../../assets/capg-logo.png";
import IMG9 from "../../assets/accenture-logo.png";
import AnimatedCursor from "react-animated-cursor";
import { type } from "@testing-library/user-event/dist/type";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Cisco",
    website: "https://www.cisco.com/c/en_in/index.html",    

  },
  {
    id: 2,
    image: IMG2,
    title: "Amazon",
    website: "https://www.amazon.jobs/en-gb",    
  },
  {
    id: 3,
    image: IMG3,
    title: "Goldman Sachs",
    website: "https://www.goldmansachs.com/",    
  },
  {
    id: 4,
    image: IMG4,
    title: "Infosys",
    website: "https://www.infosys.com/",    
  },
  {
    id: 5,
    image: IMG5,
    title: "Synopsys",
    website: "https://www.synopsys.com/",    
  },
  {
    id: 6,
    image: IMG6,
    title: "TCS",
    website: "https://www.tcs.com/",    
  },
  {
    id: 7,
    image: IMG7,
    title: "Cognizant",
    website: "https://www.tcs.com/",    
  },
  {
    id: 8,
    image: IMG8,
    title: "Capgemini",
    website: "https://www.tcs.com/",    
  },
  {
    id: 9,
    image: IMG9,
    title: "Accenture",
    website: "https://www.tcs.com/",    
  },
];

const Company = () => {
  return (
    <>
      <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #fff",
        }}
      />
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
            Companies
          </h1>
        </div>
        <div className="container" style={{ marginBottom: "15%" }}>
          <section id="company">
            <div className="company-grid">
              {/* {data.map(({ id, image, title, website }) => {
                return (
                  <article key={id} className="company__item">
                    <div className="company__item-image">
                      <img
                        src={image}
                        alt={title}
                        style={{
                          display: "block",
                          objectFit: "cover",
                          width: "100%",
                        }}
                      />
                    </div>
                    <h3>{title}</h3>
                    <div className="company__item-cta">
                      <a href={website} className="btn">
                        Website
                      </a>

                      <Link to={`/company/${id}`} className="btn btn-primary">
                        Guide
                      </Link>
                    </div>
                  </article>
                );
              })} */}
              {data.map(({ id,image, title }) => {
              return (
                <Link to = {`/company/${id}`} key={id}>
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
                      <Link to = {`/company/${id}`}
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

export default Company;
