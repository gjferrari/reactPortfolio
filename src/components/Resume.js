import React from "react";
import { FilePdfFilled } from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";
import CodingResume from "../../src/assets/codingResume.pdf";
import ResumePic from "../../src/assets/resumePic.png";
const { Meta } = Card;

const Resume = () => (
  <Card
    hoverable={true}
    style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#a7dfe3",
    }}
    cover={<img alt="picture from Arches National Park" src={ResumePic} />}
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
        href={CodingResume}
      ></Button>,
    ]}
  >
    <Meta
      avatar={
        <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg" />
      }
      title="Technical Skills"
      description={
        <div>
          <ul>Front End: HTML, CSS, JQuery, Javascript, Bootstrap, AntD </ul>
          <ul>
            Back End: MySQL, SQL Server, MongoDB, Express, ReactJS, Node,
            Handlebars, Webpack
          </ul>
        </div>
      }
    />
  </Card>
);

export default Resume;
