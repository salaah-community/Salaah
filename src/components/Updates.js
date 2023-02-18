import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import UpdateComponent from "./UpdateComponent/UpdateComponent";

function Updates() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      >
        <div className="container">
          <div className="container-top">
            <h1
              className="Ultrabold comp imp-updates"
              style={{ marginTop: "8rem", marginBottom: "7rem" }}
            >
              Important Updates!
            </h1>
          </div>
          <div className="updates-list">
            <UpdateComponent />
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Updates;
