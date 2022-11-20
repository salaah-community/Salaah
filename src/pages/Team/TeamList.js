import React from "react";

const TeamList = (props) => {
  return (
    <div>
      <div className="container">
        <div className="teamName" style={{ marginBottom: "1rem" }} >
          <h4>{props.name}</h4>
          <p>{props.title}</p>
        </div>
        {/* <hr style={{ marginBottom: "1rem" }} /> */}
      </div>
    </div>
  );
};

export default TeamList;
