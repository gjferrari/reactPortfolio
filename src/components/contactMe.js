import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { Avatar, Card, Button } from "antd";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";

function ContactMe() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid. Please try again.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <section className="sections contact">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
     
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="email">Email address:</label>
          <br />
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
       
        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button
          type="text"
          htmlType="submit"
          icon={
            <MailFilled
              style={{ color: "#800797", fontSize: "20px" }}
              key="link"
            />
          }
        ></Button>
      </form>
    </section>
  );
}

export default ContactMe;
