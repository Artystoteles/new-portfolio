import React from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
import { letter } from "../../svgs";

const ContactMe = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_445rdn8",
        "template_4sq9ekl",
        e.target,
        "user_rWWK8H9AmBdtlmfeni20i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <h2 className="contact__header">Contact me</h2>
      <div className="contact__content">
        <div className="contact__letterContainer">
          <img className="contact__letterImg" src={letter} />
        </div>
        <div className="contact__formContainer">
          <form className="contact__form" onSubmit={sendEmail}>
            <input
              name="email"
              className=" contact__formInput"
              type="text"
              placeholder="Your email"
            />
            <input
              name="subject"
              className=" contact__formInput"
              type="text"
              placeholder="Subject"
            />
            <textarea
              name="message"
              className="contact__message"
              placeholder="something nice..."
            />
            <input
              className="contact__submitButton"
              type="submit"
              value="SEND"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
