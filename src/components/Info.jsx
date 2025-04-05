import React from "react";
import "../styles/Info.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import circle from "../assets/circle.svg";
import { motion } from "framer-motion";
const Info = () => {
  return (
    <div>
      <div>
              <div className="creative container homeLast">
              <div className="left__side">
                <h1 className="Ultrabold">Let's</h1>
                <h1 className="Ultrabold">Explore</h1>
              </div>
              <div className="right__side" style={{width: '70%'}}>
                <p style={{fontFamily: "Poppins, sans-serif",marginBottom:"2.2rem", fontSize: '1.4rem' ,lineHeight: "24px"}}>
                Curious about our events? Dive into the experience and explore now!
                </p>
                <motion.div initial={{ opacity: 0.6 }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}>
                <Link to="/events" className="btn-creative">
                 Explore Now
                </Link>
                </motion.div>
              </div>
            </div>
      
            <hr style={{width: '80vw', margin: 'auto'}}/>
          </div>

      <div className="happening">
        <div className="container">
          <h1 className="Ultrabold">What happens next?</h1>
          <div className="happens">
            <div className="left__happens">
              <p className="Regular" style={{ color: "var(--color-light)" }}>
                1.
              </p>
              <p className="Regular">Mentoring</p>
            </div>
            <div className="right__happens">
              <p>
                We plan on organizing skill development bootcamps in order to
                help students build their portfolios. Therefore, assisting them
                in nailing their interviews for various profiles.
              </p>
            </div>
          </div>
          <hr style={{ marginBottom: "2rem" }} />
          <div className="happens">
            <div className="left__happens">
              <p className="Regular" style={{ color: "var(--color-light)" }}>
                2.
              </p>
              <p className="Regular">Referral</p>
            </div>
            <div className="right__happens">
              <p>
                We want to extend our functionality and capabilities by adding a
                referral culture to our community. Our mentors will refer
                students to employers. The future goal includes bringing more
                jobs to our college campus.
              </p>
            </div>
          </div>
          <hr style={{ marginBottom: "2rem" }} />
          <div className="happens">
            <div className="left__happens">
              <p className="Regular" style={{ color: "var(--color-light)" }}>
                3.
              </p>
              <p className="Regular">Onboarding</p>
            </div>
            <div className="right__happens">
              <p>
                The community looks forward to the overall development and
                expansions of the network to provide students on-ground
                experience in every domain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
