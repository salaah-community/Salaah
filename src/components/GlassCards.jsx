import React, { useRef } from "react";
import "../styles/GlassCards.css";
import { RiSwordFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { SiApacheopenoffice } from "react-icons/si";

const GlassCards = () => {
  return (
    <div className="container">
      <h1 className="Regular what-we-offer" style={{textAlign: 'center', marginTop: '15%', marginBottom: '7%'}}>What we Offer?</h1>
      <div className="glass__container">
        <article className="glass__item">
          <div className="glass__icon-div">
            <FaUserFriends className="icon" />
          </div>
          <h3 className="glass__content">
            Providing one to one guidance to the students.
          </h3>
        </article>

        <article className="glass__item">
          <div className="glass__item-image">
            <RiSwordFill className="icon" />
          </div>
          <h3 className="glass__content">
            Preparing students for their future battles.
          </h3>
        </article>

        <article className="glass__item">
          <div className="glass__item-image">
            <SiApacheopenoffice className="icon" />
          </div>
          <h3 className="glass__content">
            Assuring a bright & successful career.
          </h3>
        </article>
        </div>
      </div>
  );
};

export default GlassCards;
