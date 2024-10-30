import React from "react";
import TeamCards from "./TeamCards";
// import AnimatedCursor from "react-animated-cursor";
import { motion } from 'framer-motion';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Team.css";
import { teamBoard } from "./TeamData/Board";
import { teamExec } from "./TeamData/Executives";
import { teamHeads } from "./TeamData/Heads";
import { teamLeads } from "./TeamData/Leads";
import { mentors } from "./TeamData/Mentor_Mentee_Board";
import { teamMentors } from "./TeamData/Mentors";
import { teamWorking } from "./TeamData/Working";
import TeamList from "./TeamList";

const Team = () => {
  return (
    <div>
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
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      >
        <div className="container">
          <div className="container-top">
            <h1
              className="Ultrabold comp"
              style={{ marginTop: "8rem", marginBottom: "7rem" }}
            >
              Behind the Scenes
            </h1>
          </div>
          <div id="team-section">
            <h1 className="team_headline Regular">Salaah Heads</h1>
            <div style={{ marginBottom: "7rem" }}>
              <div className="teamCard_grid">
                {teamHeads.map(({ name, title, img }) => {
                  return <TeamCards name={name} title={title} img={img} loading="lazy" />;
                })}
              </div>
            </div>
          </div>
          <div id="team-section">
            <h1 className="team_headline Regular">Board of Governance</h1>
            <div style={{ marginBottom: "7rem" }}>
              <div className="teamCard_grid">
                {teamBoard.map(({ name, title, img }) => {
                  return <TeamCards name={name} title={title} img={img} loading="lazy" />;
                })}
              </div>
            </div>
          </div>
          <div id="team-section">
            <h1 className="team_headline Regular">Mentor Mentee Board</h1>
            <div style={{ marginBottom: "7rem" }}>
              <div className="teamCard_grid">
                {mentors.map(({ name, title, img }) => {
                  return <TeamCards name={name} title={title} img={img} loading="lazy" />;
                })}
              </div>
            </div>
          </div>
          <div id="team-section">
            <h1 className="team_headline Regular">Executives</h1>
            <div style={{ marginBottom: "7rem" }}>
              <div className="teamCard_grid">
                {teamExec.map(({ name, title, img }) => {
                  return <TeamCards name={name} title={title} img={img} loading="lazy" />;
                })}
              </div>
            </div>
          </div>
          <div id="team-section">
            <h1 className="team_headline Regular">Leads</h1>
            <div style={{ marginBottom: "7rem" }}>
              <div className="teamCard_grid">
                {teamLeads.map(({ name, title, img }) => {
                  return <TeamCards name={name} title={title} img={img} loading="lazy" />;
                })}
              </div>
            </div>
          </div>
          <div id="team-section">
            <h1 className="team_headline Regular">Mentors & Members</h1>
            <div style={{ marginBottom: "7rem", marginTop: "3rem" }}>
              <div className="teamCard_grid">
                {teamMentors.map(({ name, title }) => {
                  return <TeamList name={name} title={title} />;
                })}
              </div>
            </div>
          </div>
          <div id="team-section">
              <h1 className="team_headline Regular">Working Committee</h1>
              <div style={{ marginBottom: "7rem",marginTop: "3rem" }}>
                <div className="teamCard_grid">
                  {teamWorking.map(({ name, title }) => {
                    return <TeamList name={name} title={title} />;
                  })}
                </div>
              </div>
            </div>            
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Team;
