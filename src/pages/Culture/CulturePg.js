import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../components/Navbar";
import "../../styles/Page.css";
import Footer from "../../components/Footer";
import HomeLast from "../../components/HomeLast";
import AnimatedCursor from "react-animated-cursor";
import Mentors from "../Company/mentors";
import kashika from "../../assets/kashika.jpg"
const CulturePg = () => {
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
      <div
        style={{
          backgroundColor: "rgba(68, 68, 68, 0.4)",
          fontFamily: "Poppins",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="hero-comp-img"
        />
        <div className="container pg-container">
          <h1
            className="Ultrabold"
            style={{
              fontSize: "3rem",
              marginTop: "3rem",
              marginBottom: "4rem",
              textAlign: "center",
            }}
          >
            Social Media Influencer
          </h1>
          A Social Media Influencer is a user on social media who has
          established credibility in a specific industry. These content creators
          have access to a large audience and can share information to persuade
          others through their authenticity and reach. Social media influencers
          often partner with brands, promoting products or services to followers
          in exchange for monetary compensation, free products, or discounts.
          <br /> <br /> <h2>Demand</h2>
          No social media marketing strategy is complete without influencers. It
          is safe to say that social media influencers have now become an
          inevitable part of digital marketing. This marketing strategy now has
          several elements to it which need attention. Working with influencers
          is another layer that needs focus because the effectiveness of the
          campaign depends on it. From choosing the right social media
          influencers to implementing the strategy, everything is a part of
          influencer marketing.
          <br /> <br /> <h2>Fields</h2>
          Social media influencers are individuals who have built a social media
          fan base and are frequently viewed by their followers as iconic models
          and experts in their chosen industry.Anyone can be an influencer, come
          from different backgrounds, and specialize in various fields,
          including but not limited to:
          <br />
          • Actors and actresses <br />
          • Photographers <br />
          • Models <br />
          • Musicians <br />
          • TV and social media stars <br />
          • Bloggers and vloggers <br />
          • Sports stars and athletes <br />
          • Editors and authors <br />
          <br /> <h2>Platforms</h2>
          There are many platforms which are used for reaching out to the users
          but here are some of the most used platforms: <br />
          • Actors and actresses <br />
          • Photographers <br />
          • Models <br />
          • Musicians <br />
          • TV and social media stars <br />
          • Bloggers and vloggers <br />
          • Sports stars and athletes <br />
          • Editors and authors <br />
        </div>
        <h3
          className="Regular"
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            marginTop: "6rem",
            marginBottom: "5rem",
          }}
        >
          Our Mentors
        </h3>
        <div className="container">
          <Mentors
            name="Ms. Kashika"
            img={kashika}
            link="https://www.linkedin.com"
          />
        </div>
        <HomeLast />
        <Footer />
      </div>
    </>
  );
};

export default CulturePg;
