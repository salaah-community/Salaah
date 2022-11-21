import React from "react";
import "../styles/ContactUs.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
// import AnimatedCursor from "react-animated-cursor";
import {motion} from 'framer-motion'

const Contact = () => {
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
    {/* <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '3px solid #fff',
        }}
        /> */}
      <Navbar />
      <motion.div className="contact-page" animate={{ y: 0, opacity: 1, type: "spring"}} initial={{ opacity: 0.6, y: 310 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}>
        <div className="happening">
          <div className="container container-top">
            <h1 className="Ultrabold">How can we help you?</h1>
          </div>
        </div>

        <div className="container para-container-contact">
          <div className="Poppins help-para-text">
            <h3>
              We're happy to answer any questions you may have about us.
            </h3>
          </div>
        </div>
      </motion.div>
      <section id="contact" style={{marginBottom: "10%", marginTop: "6%"}}>
        <div className="container contact__container">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
