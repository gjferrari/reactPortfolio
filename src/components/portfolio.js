import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row, Carousel } from "antd";

const { Meta } = Card;

const Portfolio = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="Portfolio" style={{ width: 350 }}>
      <Carousel afterChange={onChange}>
        <div id="caroCard" style={{ width: 300, height: 600 }}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679707119/StandupShot_r7lkic.jpg"
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
                <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg" />
              }
              title="About Me"
              description="This is the description"
            />
          </Card>
        </div>

        <div style={{ width: 300 }}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679707119/StandupShot_r7lkic.jpg"
              />
            }
            // actions={[
            //   <SettingOutlined key="setting" />,
            //   <EditOutlined key="edit" />,
            //   <EllipsisOutlined key="ellipsis" />,
            // ]}
          >
            <Meta
              avatar={
                <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg" />
              }
              title="About Me"
              description="This is the description"
            />
          </Card>
        </div>
      </Carousel>
    </div>
  );
};

export default Portfolio;
