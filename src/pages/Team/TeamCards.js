import React from "react";
import "./TeamCards.css";

const TeamCards = (props) => {
  return (
    <div>      
        <div className="teamCard">
          <div className="teamImg" style={{backgroundImage: `url('${props.img}')`,}}></div>
          <div className="teamName">
            <h4>{props.name}</h4>
            <p>{props.title}</p>
          </div>
        </div>      
    </div>
  );
};

export default TeamCards;
