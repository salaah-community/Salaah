import React from "react";
import { useRef } from "react";
import "../styles/Footer.css";
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import Logo from "../assets/logo2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cgnl4vo",
      "template_avg4ck2",
      form.current,
      "iIfoShymxS7k0LgRJ"
    );
    e.target.reset();
  };

  return (
    <>
      <div className="container Poppins">
        <div
          className="row"
          style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div className="col first">
            <img src={Logo} alt="logo" />
            <p>
              ©Salaah, The Mentor Community. <br />2024- 2025. All rights reserved.
            </p>
          </div>
          <div className="col">
            <ul>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/team">Our Team</Link>
              </li>
              <ul style={{ display: "flex" }}>
                <motion.li
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                  style={{ padding: "1rem 0 1rem 0" }}
                >
                  <a
                    style={{ color: "#c8b8db" }}
                    href="mailto: salaah@abes.ac.in"
                  >
                    <AiOutlineMail size={26} />
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                  style={{ padding: "1rem 0 1rem 1rem" }}
                >
                  <a
                    style={{ color: "#c8b8db" }}
                    href="https://www.instagram.com/salaah_abesec/"
                  >
                    <FiInstagram size={24} />
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                  style={{ padding: "1rem 0 1rem 1rem" }}
                >
                  <a
                    style={{ color: "#c8b8db" }}
                    href="https://www.youtube.com/@salaah2021"
                  >
                    <FiYoutube size={24} />
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                  style={{ padding: "1rem 0 1rem 1rem" }}
                >
                  <a
                    style={{ color: "#c8b8db" }}
                    href="https://www.linkedin.com/company/salaah-the-mentor-community/"
                  >
                    <FiLinkedin size={24} />
                  </a>
                </motion.li>
              </ul>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <Link to="/defence/defence">Defence</Link>
              </li>
              <li>
                <Link to="/opportunities">Corporate</Link>
              </li>
              <li>
                <Link to="/culture/social-media-influencer">Cultural</Link>
              </li>
            </ul>
          </div>
          <div className="col last">
            <h3 className="Regular last-text">
              Stay up to date with our news and updates. Subscribe to our
              newsletter.
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="email"
                name="email"
                placeholder="Your email here"
                className="newsletter Poppins"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
