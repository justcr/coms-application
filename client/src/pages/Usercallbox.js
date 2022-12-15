import React from "react";
import "./Usercallbox.css";



function Usercallbox() {

  return (
    <div className="usercallbox-body">
      <div id="control-box">
        <h1 id="call-label"> CALL</h1>
        <div id="switch-container">
          <div id="backplate"></div>
          <div className="button" id="switch"></div>
        </div>
      </div>
    </div>
  );
}

export default Usercallbox;
