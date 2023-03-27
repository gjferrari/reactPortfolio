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
    style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      paddingTop: 10,
      backgroundColor: "#a7dfe3",
    }}
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
        <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg" />
      }
      title="About Me"
      description="Hi! I'm Genevieve: I'm a full stack web development student based out of Tacoma, WA. 
      My passion for problem solving and language learning inspired my coding journey and I can't wait to jump into the industry!
      I'm learning to enjoy front-end design but my one true love is working with databases: I can't get enough of object oriented programming!
      In my free time I do standup, hang out with my dog Frodo, and make movies with my friends."
    />
  </Card>
);

export default AboutMe;
