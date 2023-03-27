import React, { useState } from "react";
// import { validateEmail } from "../utils/helpers";
// import { Avatar, Card, Button } from "antd";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";

import { Button, Form, Input } from "antd";
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
  required: "${name} is required!",
  types: {
    email: "${email} is not a valid email!",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};



const ContactMe = () => {
  return (
    <div id="contact-form" style={{padding:30}}>
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
        name={["name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          placeholder="Frodo Baggins"
          // onBlur={handleChange}
        />
      </Form.Item>
      <Form.Item
        name={["email"]}
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input
          placeholder="ringbearer@gmail.com"

          // onBlur={handleChange}
        />
      </Form.Item>

      <Form.Item name={["user", "message"]} label="Message">
        <Input.TextArea placeholder="Wow! You are the greatest coder who ever lived!"/>
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
    </div>
  );
};

export default ContactMe;
