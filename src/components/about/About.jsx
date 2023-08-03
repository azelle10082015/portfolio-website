import React from "react";
import "./about.css";
import me2 from "../../Assets/img-p1.jpg";
import { FaAward } from "react-icons/fa";
import { BsCalendarMonth } from "react-icons/bs";
import { SiFreelancer } from "react-icons/si";
import edouardResume from "../../Assets/edouardResume.pdf";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me2} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsCalendarMonth className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years working</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>
                <a
                  href={edouardResume}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  Certificates
                </a>
              </h5>
              <small>5+ Certificates</small>
            </article>

            <article className="about__card">
              <SiFreelancer className="about__icon" />
              <h5>
                <a href="#portfolio">Freelance</a>
              </h5>
              <small>100+ Projects</small>
            </article>
          </div>
          <p>
            I went to college for computer science and completed 5 certificates
            in frontend development. I am passionate of programming and
            technologies. As a self-taught, I read a lot; science and technology
            are moving so fast that sometimes companies can't follow it up, my
            zeal to learn will be a great input to your companies in an industry
            that is mutating every day. I love discovering new technologies, so
            I am learning every day, yet there are still so much to learn...
          </p>
          <a href="#contact" className="btn btn-primary">
            let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
