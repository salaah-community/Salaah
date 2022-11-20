import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../components/Navbar";
import "../../styles/Page.css";
import Footer from "../../components/Footer";
import HomeLast from "../../components/HomeLast";
import AnimatedCursor from "react-animated-cursor";
import Mentors from "../Company/mentors";
import shwet from "../../assets/shwetsir.jpeg"
const DefencePage = () => {
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
          src="https://wallpapercave.com/wp/wp7148895.jpg"
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
            Defence Sector
          </h1>
          The two exams for the defense sector that can be taken after
          graduation: <br />
          CDS (Combined Defence Services Exam) and AFCAT (Air Force Common
          Admission Test). <br /> We'll be covering CDS examination in this
          article.
          <br />
          <br />
          <h2>CDS Exam</h2>
          The Union Public Service Commission conducts the Combined Defence
          Services Examination to recruit Commissioned Officers in the Indian
          Military Academy, Officers Training Academy, Indian Naval Academy, and
          Indian Air Force Academy.
          <br />
          <br />
          <b>CDS Qualification</b>
          <p>
            Candidates need to meet the following educational qualification to
            apply for the CDS exam:
          </p>
          1. For IMA and Officers’ Training Academy, the required educational
          qualification is Graduation in any discipline from a recognized
          university.
          <br />
          2. For the Indian Naval Academy, candidates must have a degree in
          Engineering from a recognized university.
          <br />
          3. For Air Force Academy, candidates must have a degree in Engineering
          from a recognized university.
          <br />
          <br />
          <b>Note: </b> Candidates who are studying in the final year/semester
          of Graduation can also apply provided they do not have any backlog up
          to the last year/semester for which results have been declared at the
          time of submitting the application form. They are required to submit
          proof of passing graduation at the time of the commencement of the
          course.
          <br />
          <br />
          <b>Physical Fitness</b>
          <br />
          Candidates must be physically and mentally fit as per the guidelines
          prescribed by UPCS. Every year, a mass of candidates are disqualified
          on the basis of physical standards. Candidates are advised to check
          the CDS physical and medical standards before applying for the CDS
          exam.
          <br />
          <br />
          <h2>Selection Process</h2>
          1: Release of Notification and Application form. <br /> 2: Issue of
          Admit card for Written Exam. <br /> 3: Appear in the Written Exam.{" "}
          <br /> 4: Declaration of result of Written Exam. <br /> 5: Appearing
          in the SSB interview. <br /> 6: Declaration of Final Result.
          <br />
          <br />
          <h2>Exam Pattern</h2>
          CDS exam pattern is divided into a Written Exam and SSB Interview. The
          written exam for IMA, INA, and AFA comprises three sections: English,
          General Knowledge, and Elementary Mathematics. The test paper for
          admission to OTA comprises two sections: English and General
          Knowledge. Each section is held for two hours. The total marks on the
          test for IMA, INA, and AFA are 300, while it is 200 for OTA. The SSB
          Interview for IMA, INA, and AFA carries 300 marks each while it is 200
          marks for OTA. The SSB Interview procedure consists of two stages: I
          and II. Stage I of the SSB Interview comprises Officer Intelligence
          Rating (OIR) tests and Picture Perception Description Test (PP&DT) and
          Interviews, Group Testing Officer Tasks, Psychology Tests, and
          Conferences.
          <br />
          <br />
          <h2>Preparation Tips</h2>
          <br />
          <i>CDS Books for General Awareness</i>
          <br />
          1. General Awareness → Manohar Panday (Arihant Publications)
          <br />
          2. Manorama Yearbook → Philip Mathew <br />
          3. Pratiyogita Darpan (Magazines) → Pratiyogita Darpan Editorial Team
          <br />
          4. Newspapers → Hindu, The Indian Express, The Economic Times <br />
          <br />
          <i>CDS Books for English</i>
          <br />
          1. Objective General English → S P Bakshi (Arihant Publications)
          <br />
          2. High School English Grammar & Composition → Wren and Martin <br />
          3. Word Power Made Easy → Norman Lewis
          <br />
          <br />
          <i>CDS Books for Maths</i>
          <br />
          1. Mathematics → R S Aggarwal
          <br />
          2. Quantitative Aptitude for Competitive Examinations <br />
          3. Pathfinder for CDS → Arihant Publications
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
            name="Mr. Shwet"
            img={shwet}
            link="https://www.linkedin.com"
          />
        </div>
        <HomeLast />
        <Footer />
      </div>
    </>
  );
};

export default DefencePage;
