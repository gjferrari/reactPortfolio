// import React from "react";

// function aboutMe() {
//   return (
//     <div className="aboutMe container mx-auto">
//       <h2 className="title font-bold underline">Why isn't this showing up?</h2>
//     </div>
//   );
// }

// export default aboutMe;

import React from "react";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";

const { Meta } = Card;

const AboutMe = () => (
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
      <Button
        type="text"
        icon={
          <LinkedinFilled
            style={{ color: "#800797", fontSize: "20px" }}
            key="link"
          />
        }
        href="https://www.linkedin.com/in/genevieve-ferrari-17001178/"
      ></Button>,
      <Button
        type="text"
        icon={
          <GithubFilled
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
        <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679704914/Genevieve_Ferrari_Headshot_xulyob.jpg" />
      }
      title="About Me"
      description="I'm a full stack web developmer based out of Tacoma, WA"
    />
  </Card>
);

export default AboutMe;
