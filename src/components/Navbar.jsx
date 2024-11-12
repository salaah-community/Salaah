import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo2.png";
import { motion } from "framer-motion";
import { CgMenuGridR } from 'react-icons/cg'
import { IoCloseSharp } from 'react-icons/io5';
import '../styles/Navbar.css';
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <motion.nav
        className="navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        <div className="nav-logo-div"><Link to="/">
          <img
            className="log_img"
            src={Logo}
            style={{ maxWidth: "100%", maxHeight: "100%", display: "block", marginTop: "25px" }}
            alt=""
            onClick={closeMobileMenu}
          /></Link></div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li> */}
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <NavLink
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </motion.li>
          {/* <li className="nav-item">
            <NavLink
              to="/gallery"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Gallery
            </NavLink>
          </li> */}
          {/* <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <NavLink
              to="/gallery"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Gallery
            </NavLink>
          </motion.li>  */}
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <NavLink
              to="/opportunities"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Career Tracks
            </NavLink>
          </motion.li>

          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <NavLink
              to="/team"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Our Team
            </NavLink>
          </motion.li>
          {/* <li className="nav-item">
            <NavLink to="/team" className="nav-links" onClick={closeMobileMenu}>
              Our Team
            </NavLink>
          </li> */}
          {/* <li className="nav-item">
            <NavLink to="/faq" className="nav-links" onClick={closeMobileMenu}>
              Faq's
            </NavLink>
          </li> */}
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <NavLink
              to="/hackathon"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              HackWithSalaah
            </NavLink>
          </motion.li>
          {/* <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li> */}
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <NavLink
              to="/updates"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Updates
            </NavLink>
          </motion.li>

        </ul>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <IoCloseSharp /> : <CgMenuGridR />}
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
