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
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const AboutMe = () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679704914/Genevieve_Ferrari_Headshot_xulyob.jpg"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={
        <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679704914/Genevieve_Ferrari_Headshot_xulyob.jpg" />
      }
      title="Card title"
      description="This is the description"
    />
  </Card>
);

export default AboutMe;
