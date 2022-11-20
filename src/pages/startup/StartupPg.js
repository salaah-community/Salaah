import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../components/Navbar";
import "../../styles/Page.css";
import Footer from "../../components/Footer";
import HomeLast from "../../components/HomeLast";
import AnimatedCursor from "react-animated-cursor";

const HrPage = () => {
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
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
            Entrepreneurship
          </h1>
          The term startup refers to a company in the first stages of
          operations. Startups are founded by one or more entrepreneurs who want
          to develop a product or service for which they believe there is
          demand. These companies generally start with high costs and limited
          revenue, which is why they look for capital from a variety of sources
          such venture capitalists.
          <br />
          <br />
          <h2>Types of Startup</h2>
          <br />
          <b>Small business startups</b>
          <br />
          Small business startups are from solo businesses and partnerships to
          small teams, these startups are happy staying startups as they sell
          their products and services.And while they’re interested in growth,
          they grow at their own pace. Such startups are often bootstrapped or
          self-funded, meaning that there’s less pressure to scale ASAP or be
          beholden to the immediate needs of investors. 24 Hour Tees is a prime
          example of one of these types of startups. They think of their
          workplace as a family, while also running a successful, scalable
          business. And, they’re proof that you don’t have to be a tech startup
          to benefit from tech.
          <br /><br />
          <b>Buyable startups</b>
          <br />
          The concept here: small teams build a business from scratch and sell
          it to a bigger player in their industry.These types of startups are
          usually associated with software and tech. Chances are you’ve seen
          headlines about giants like Amazon or Uber buying out smaller
          startups.
          <br /><br />
          <b>Scalable startups</b>
          <br />
          The common thread between all types of startups is the need to
          scale.This rings true whether you’re a business with dozens of
          employees or a duo working out of your parents’ garage, scalable
          startups do this by raising capital from outside investors.
          <br /><br />
          <b>Social startups</b>
          <br />
          Startups are sometimes stereotyped as being growth-obsessed and
          money-hungry.That said, some startups are specifically designed to do
          good. Social startups, which include charities and nonprofits, scale
          for the sake of philanthropy. They operate similarly to any other
          startup, but do so with the help of grants and donors.
          <br /><br />
          <h2>Skills</h2>
          • Have a curious and creative mind <br />
          • Communicate effectively <br />
          • Communicate effectively <br />
          • Learn resilience <br />
          • Managing cash flow <br />
          • Selling the vision <br />
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
        </div>
      </div>
    </>
  );
};

export default HrPage;
