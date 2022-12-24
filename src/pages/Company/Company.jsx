import React, { useEffect, useState } from "react";
import "../../styles/Company.css";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import client from "../../client";


const Company = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && references("e8871197-4aa7-48e5-873e-f52276b9bdc4")] {
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
      }
     `
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])
  return (
    <>
      <motion.div animate={{ y: 0, opacity: 1, type: "spring"}} initial={{ opacity: 0.6, y: 310 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}>
      <div className="container" style={{ marginBottom: "15%", marginTop: "5%" }}>
        <section id="company">
          <div className="company__container">
            {posts.map((post) => {
              return (

                <Link to = {`/company/${post.slug.current}`} key={post.slug.current}>
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
                      <Link to = {`/company/${post.slug.current}`}
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

export default Company;
