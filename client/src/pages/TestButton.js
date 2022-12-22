import React from "react";
import Button from "./Button";
import "./TestButton.css";

function App() {
  return (
    <div>
      <div className = "TestButton-body">
        <div id="control-box">
          <h1 id="call-label"> CALL</h1>
          <div id="switch-container">
            <div id="backplate"></div>
            <div><Button /></div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;


