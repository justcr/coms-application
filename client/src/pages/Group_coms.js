import React from "react";
import "./Group_coms.css";

function Group_coms() {
  return (
    <div className="group-callbox-body">
      <div className="group-callbox-container">

              {/* CALLBOX-LABELS */}
        <div className="callbox1-label"></div>
        <div className="callbox2-label"></div>
        <div className="callbox3-label"></div>
        <div className="callbox4-label"></div>
        <div className="callbox5-label"></div>
        <div className="callbox6-label"></div>

              {/* CALLBOX1 */}
        <div className="group-callbox1">
          <div id="group-callbox1-controller">
            <h1 id="group-callbox1-label"> CALL</h1>
            <div id="group-callbox1-switch-container">
              <div id="group-callbox1-backplate"></div>
              <div className="button" id="switch"></div>
            </div>
          </div>
        </div>

              {/* CALLBOX2 */}
        <div className="group-callbox2">
          <div id="group-callbox2-controller">
            <h1 id="group-callbox2-label"> CALL</h1>
            <div id="group-callbox2-switch-container">
              <div id="group-callbox2-backplate"></div>
              <div className="button" id="switch"></div>
            </div>
          </div>
        </div>
             
              {/* CALLBOX3 */}
        <div className="group-callbox3">
          <div id="group-callbox3-controller">
            <h1 id="group-callbox3-label"> CALL</h1>
            <div id="group-callbox3-switch-container">
              <div id="group-callbox3-backplate"></div>
              <div className="button" id="switch"></div>
            </div>
          </div>
        </div>
             
              {/* CALLBOX4 */}
        <div className="group-callbox4">
          <div id="group-callbox4-controller">
            <h1 id="group-callbox4-label"> CALL</h1>
            <div id="group-callbox4-switch-container">
              <div id="group-callbox4-backplate"></div>
              <div className="button" id="switch"></div>
            </div>
          </div>
        </div>

              {/* CALLBOX5 */}
        <div className="group-callbox5">
          <div id="group-callbox5-controller">
            <h1 id="group-callbox5-label"> CALL</h1>
            <div id="group-callbox5-switch-container">
              <div id="group-callbox5-backplate"></div>
              <div className="button" id="switch"></div>
            </div>
          </div>
        </div>

              {/* CALLBOX6 */}
        <div className="group-callbox6">
          <div id="group-callbox6-controller">
            <h1 id="group-callbox6-label"> CALL</h1>
            <div id="group-callbox6-switch-container">
              <div id="group-callbox6-backplate"></div>
              <div className="button" id="switch"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group_coms;
