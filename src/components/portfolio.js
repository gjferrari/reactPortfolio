import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";

const { Meta } = Card;

const Portfolio = () => (
  <Row>
    <Col>
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
            <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679704914/Genevieve_Ferrari_Headshot_xulyob.jpg" />
          }
          title="About Me"
          description="This is the description"
        />
      </Card>
    </Col>
  </Row>
);

export default Portfolio;

