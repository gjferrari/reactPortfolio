import React from "react";
import { FilePdfFilled } from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";

const { Meta } = Card;

const Resume = () => (
  <Card
    hoverable={true}
    style={{ width: 300, display: "flex", flexDirection: "column" }}
    cover={
      <img
        alt="example"
        src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679707119/StandupShot_r7lkic.jpg"
      />
    }
    actions={[
      //   <Button
      //     type="text"
      //     icon={
      //       <LinkedinFilled
      //         style={{ color: "#800797", fontSize: "20px" }}
      //         key="link"
      //       />
      //     }
      //     href="https://www.linkedin.com/in/genevieve-ferrari-17001178/"
      //   ></Button>,
      <Button
        type="text"
        icon={
          <FilePdfFilled
            style={{ color: "#800797", fontSize: "20px" }}
            key="link"
          />
        }
        href="https://github.com/gjferrari"
      ></Button>,
    ]}
  >
    <Meta
      avatar={
        <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg" />
      }
      title="About Me"
      description="I'm a full stack web developmer based out of Tacoma, WA"
    />
  </Card>
);

export default Resume;
