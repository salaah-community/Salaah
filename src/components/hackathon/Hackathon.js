import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Footer from "../Footer.jsx";
import "./Opportunity.css";

// import IMG1 from "../assets/corporate.png";
import IMG1 from "../../assets/hackwithinfylogo.png";
import IMG2 from "../../assets/dch.png";
import IMG3 from "../../assets/sihlogo.png";
import IMG4 from "../../assets/gdh.png";
import IMG5 from "../../assets/TCS_LOGO.jpeg";
import IMG8 from "../../assets/codegeist.png";
import IMG7 from "../../assets/cyientifiq.png";
import IMG6 from "../../assets/ey_techathon.png";
import IMG9 from "../../assets/icon_hyperbuild.png";
import IMG10 from "../../assets/devfest_eket.png";

import Navbar from "../Navbar.jsx";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "HackWithInfy",
    about:
      "HackWithInfy is a coding competition for engineering students across India. The program is specially designed to inculcate a culture of rapid problem-solving and innovative thinking early in academic life.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Devbhoomi Hackathon",
    about:
      " Devbhoomi Cyber Hackathon is providing a platform for you to outdo, outthink and outcode your biggest opponent - yourself. ",
  },
  {
    id: 3,
    image: IMG3,
    title: "Smart India Hackathon",
    about:
      "SIH brings the next generation evolution by inclusion of new methodology to inculcate the culture of startup and innovation ecosystem across different age groups.",
  },
  {
    id: 4,
    image: IMG4,
    title: "Google Hackathon",
    about:
      "Start-ups contribute to economic development & entrepreneurs generate new ideas, which are essential for constant innovation and competition.",
  },
  {
    id: 5,
    image: IMG5,
    title: "Tcs Codevita",
    about:
      "It connects people from varied backgrounds and ethnicities regardless of physical and cultural boundaries. It's also an exhilarating way to compete beyond borders and grow more skills as a programmer.",
  },
  {
    id: 8,
    image: IMG8,
    title: "Codegeist Unleashed",
    about:
      "Can AI fuel the workplace? Find out by building AI apps on Atlassian's Forge platform. $172,500 in prizes and trips to Amsterdam for the top 3 winners.",
  },{
    id: 7,
    image: IMG7,
    title: "CyientifIQ Innovation League",
    about:
      "This exhilarating event brings together brilliant minds from various fields. With three captivating themes - Designing Digital Enterprises, Building Intelligent Products and Platforms, and Solving Sustainability Challenges to shape a better future",
  },{
    id: 6,
    image: IMG6,
    title: "EY Techathon",
    about:
      "Ignite the spark of innovation in you, powered by EY's cutting-edge Gen AI platform to accelerate your learnings through personalized leadership connects!",
  },{
    id: 9,
    image: IMG9,
    title: "Icon Hyperbuild",
    about:
      "Transcend blockchain barriers and build your dream cross-chain project using one of the world’s most connected networks, ICON.",
  },{
    id: 10,
    image: IMG10,
    title: "DevFest Eket",
    about:
      "Develop innovative tech solutions that can contribute to a more sustainable and eco-friendly future for Eket and its surroundings",
  },
];

const Hackathon = () => {
  return (
    <div>
      <Navbar/>
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
            HackAthon
          </h1>
        </div>
        <div className="container"><section id="company">
          <div className="company-grid">
            {data.map(({ id, link,image, title, about }) => {
              return (
                <Link to = {`${id}`}>
                <div class="company_box" style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: '60%'
                }}>
                <div id="titleTrack"style={{display: 'flex'}}>
                  <h3 style={{ marginTop: "78%", marginLeft: "auto", marginRight: "auto" }}>
                    {title}
                  </h3></div>
                  <div class="overlay">
                    <div class="company_box_text">
                      <p>{about}</p><br />
                      <Link to = {`${id}`}
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

export default Hackathon;
