import React from "react";
import "./portfolio.css";
import Birthday from "../../Assets/Birthday reminder.jpeg";
import toDo from "../../Assets/ToD-list.jpeg";
import deliver from "../../Assets/delivery.jpeg";
import passenger from "../../Assets/passenger.jpeg";
import mitel from "../../Assets/mitel.jpg";
import smallbiz from "../../Assets/smallbiz.jpg";
import hair2 from "../../Assets/hair2.webp";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Personal Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={smallbiz} alt="" />
          </div>
          <h3>SmallBiz</h3>
          <h5>
            <i>client project</i>
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://smallbiz.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Deployed
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Birthday} alt="" />
          </div>
          <h3>My Family Birthday Reminder App</h3>
          <h5>
            <i>personal project</i>
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/azelle10082015/Familly-Birthday"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              My Github Project
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={mitel} alt="" />
          </div>
          <h3>MITEL</h3>
          <h5>
            <i>client project</i>
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://www.mitel.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Deployed
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={toDo} alt="" />
          </div>
          <h3>ToDo-list App</h3>
          <h5>
            <i>personal project</i>
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/azelle10082015/ToDo-List"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              My Github Project
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={deliver} alt="" />
          </div>
          <h3>Delivery App</h3>
          <h5>
            <i>unfinished/personal project</i>
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              My Github Project
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={hair2} alt="" />
          </div>
          <h3>The Right Hair Styles</h3>
          <h5>
            <i>client project</i>
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://therighthairstyles.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Deployed
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={passenger} alt="" />
          </div>
          <h3>Passenger: My rider App</h3>
          <h5>
            <i>unfinished/personal project</i>
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              My Github Project
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
