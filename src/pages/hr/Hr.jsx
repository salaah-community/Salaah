import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/Company.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import client from "../../client";

const Hr = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && references("2a7bd387-aad7-49f5-8f03-22ab63d27a55")] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])
  return (
    <>
      {/* <Navbar /> */}
      <motion.div
        animate={{ y: 0, opacity: 1, type: "spring" }}
        initial={{ opacity: 0.6, y: 310 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      >
       
        <div className="container" style={{ marginBottom: "15%", marginTop: "5%" }}>
          <section id="company">
            <div className="company-grid">
              
            {posts.map((post) => {
              return (

                <Link to = {`/hr/${post.slug.current}`} key={post.slug.current}>
                <div class="company_box" style={{
                  backgroundImage: `url('${post.mainImage.asset.url}')`,
                  backgroundSize: '50%'
                }}>
                <div style={{display: 'flex'}}>
                  <h2 style={{ marginTop: "75%", marginLeft: "auto", marginRight: "auto" }}>
                  {post.title}
                  </h2></div>
                  <div class="overlay">
                    <div class="company_box_text">
                      <br />
                      <Link to = {`/hr/${post.slug.current}`}
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
    </>
  );
};

export default Hr;
