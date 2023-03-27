import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
// import { Avatar, Card, Button } from "antd";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";

import { Button, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const ContactMe = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={["user", "name"]}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input placeholder="Frodo Baggins" />
    </Form.Item>
    <Form.Item
      name={["user", "email"]}
      label="Email"
      rules={[
        {
          type: "email",
          required: true,
        },
      ]}
    >
      <Input placeholder="ringbearer@gmail.com" />
    </Form.Item>

    {/* <Form.Item name={["user", "website"]} label="Website">
      <Input />
    </Form.Item> */}
    <Form.Item name={["user", "introduction"]} label="Introduction">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default ContactMe;

// function ContactMe() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [errorMessage, setErrorMessage] = useState("");
//   const { name, email, message } = formState;

//   function handleSubmit(event) {
//     Event.preventDefault();
//     console.log(formState);
//   }

//   function handleChange(event) {
//     if (event.target.name === "email") {
//       const isValid = validateEmail(event.target.value);
//       console.log(isValid);
//       if (!isValid) {
//         setErrorMessage("Your email is invalid. Please try again.");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       if (!event.target.value.length) {
//         setErrorMessage(`${event.target.name} is required.`);
//       } else {
//         setErrorMessage("");
//       }
//     }

//     if (!errorMessage) {
//       setFormState({ ...formState, [event.target.name]: event.target.value });
//     }
//   }

//   return (
//     <section className="sections contact">
//       <h2>Contact Me</h2>
//       <form id="contact-form" onSubmit={handleSubmit}>

//         <div>
//           <label htmlFor="name">Name:</label>
//           <br />
//           <input
//             type="text"
//             name="name"
//             defaultValue={name}
//             onBlur={handleChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email address:</label>
//           <br />
//           <input
//             type="email"
//             name="email"
//             defaultValue={email}
//             onBlur={handleChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="message">Message:</label>
//           <br />
//           <textarea
//             name="message"
//             rows="5"
//             defaultValue={message}
//             onBlur={handleChange}
//           />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <Button
//           type="text"
//           htmlType="submit"
//           icon={
//             <MailFilled
//               style={{ color: "#800797", fontSize: "20px" }}
//               key="link"
//             />
//           }
//         ></Button>
//       </form>
//     </section>
//   );
// }

// export default ContactMe;
