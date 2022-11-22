import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../components/Navbar";
import "../../styles/Page.css";
import Footer from "../../components/Footer";
import HomeLast from "../../components/HomeLast";
// import AnimatedCursor from "react-animated-cursor";
import Mentors from "../Company/mentors";
import mohit from "../../assets/mohitMisra.jpeg"
const HrPage = () => {
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
          border: "3px solid #fff",
        }}
      /> */}

      <Navbar />
      <div
        style={{
          backgroundColor: "rgba(68, 68, 68, 0.4)",
          fontFamily: "Poppins",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
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
            Human Resources
          </h1>
          The area of a corporation responsible for managing its human
          capital—the employees—is known as the human resources (HR) sector. The
          hiring, training, development, rewarding, and retention of employees
          are within the purview of the HR sector. The HR department also
          manages employee interactions, including conflict resolution,
          diversity promotion, and ensuring labour rules are followed. The size
          and structure of the HR sector might vary based on the kind and size
          of the firm. Consulting, professional services, and information
          technology are some of the most well-liked HR industries.
          <br />
          <br />
          <h2>Process</h2>
          <br />
          <b>Complete your 10+2 or equivalent</b>
          <br />
          Completion of 10+2 or higher secondary is frequently the very minimum
          requirement to acquire a diploma or bachelor's degree in human
          resource management (HRM). For admittance into the human resources
          industry, you can study your 10+2 in any topic. Additionally, you
          might need a GPA of at least 60% to enroll in undergraduate or diploma
          programmes.
          <br /> <br />
          <b>Earn your bachelor's degree or equivalent</b>
          <br />
          Completing an HRM diploma is the initial step in any human resources
          degree or programme. Even better, you may pursue a bachelor of arts or
          a bachelor of business administration (BBA) (BA). After completing an
          entrance exam, you can be admitted to a dual-degree programme, such as
          a BBA-MBA. Obtaining a score above 60% will assist you in being
          admitted to a desirable college since many universities base admission
          on the marks earned in the 10+2 exam for BBA and BA programmes. As a
          result, research the admission requirements for any college or
          university before applying.
          <br /><br />
          <b>Earn a master's degree</b>
          <br />
          The majority of businesses want a master's degree for human resource
          managers, preferably in business administration, labour law, or human
          resources. You can pursue either an MBA from a reputable college or a
          master of business administration with a focus on human resources.
          Participate in many entrance tests to be admitted to an MBA college.
          Furthermore, you need a master's degree to enrol in a PhD programme in
          human resource management. Your earning potential can be increased,
          and you can develop more quickly in your job, by enrolling in a
          master's or doctoral programme.
          <br /><br />
          <b>Complete a certification</b>
          <br />
          Although certificates are optional, they might demonstrate to a
          potential employer your experience in a specific HR subject.
          Certifications frequently aid in bringing a deeper and wider
          perspective to work and provide a learning environment that you may
          mimic when working as an HR manager. Typical qualifications to take
          into account include: <br />• Society of Human Resource Management
          Certified Professional (SHRM-CP) <br />
          • Indian Society of Training and Development (ISTD) <br />
          • Organisational Development Certification Program <br />
          • Senior Professional in Human Resources (SPHR) <br />
          • Certified Professional in Learning and Performance (CPLP) <br />
          <br />
          <h2>Skills</h2>
          <br />
          • Problem solving <br />
          • Negotiation <br />
          • Time Management <br />
          • Communication Skills <br />
          • Decision Making <br />
          • Empathy <br />
          • Organizational skills <br />
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
          <div className="">
          <Mentors
            name="Mr. Mohit"
            img={mohit}
            link="https://www.linkedin.com"
          />
        </div>
        <HomeLast />
        <Footer />
        </div>
      </div>
    </>
  );
};

export default HrPage;
