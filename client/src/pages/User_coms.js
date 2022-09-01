import React from "react";
import "./User_coms.css";

function user_coms() {
  return (
    <div className="coms-body">
      <div id="controller">
        <h1 id="label"> CALL</h1>
        <div id="switch-container">
          <div id="backplate"></div>
          <div className="button" id="switch"></div>
        </div>
      </div>
    </div>
  );
}

export default user_coms;
