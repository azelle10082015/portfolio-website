import React from "react";
import edouardResume from "../../Assets/edouardResume.pdf";

function Hire() {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-primary">
        Your New Project
      </a>
      <a href="#contact" className="btn btn-primary">
        Hire Me
      </a>
      <a
        href={edouardResume}
        className="btn btn-primary"
        download="resume"
        target="_blank"
        rel="noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Hire;
