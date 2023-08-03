import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
//import Comments from "../comment/Comments"

function Contact() {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>edouardbiwoule@gmail.com</h5>
            <a
              href="mailto:edouardbiwoule@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an email
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>facebook</h5>
            <a
              href="https://m.me//edward.mink.5/"
              target="_blank"
              rel="noreferrer"
            >
              Messenger
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+018173786689</h5>
            <a
              href="https://api.whatsapp.com/sendphone=+018173786689"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </article>
          <article>
            {/* <Comments
              commentsUrl="http://localhost:3004/comments"
              currentUserId="1"
            /> */}
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
