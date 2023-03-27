import React from "react";
import { GithubFilled, HomeTwoTone } from "@ant-design/icons";
import { Avatar, Card, Carousel, Radio, Button } from "antd";
import { useState } from "react";
import SideHustle from "../assets/SideHustle.png";
import BurnoutBuddy from "../assets/burnout-buddy.png";
import Jate from "../assets/JATE.png";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const { Meta } = Card;

const Portfolio = () => {
  const [dotPosition, setDotPosition] = useState("top");
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };

  return (
    <div className="Portfolio" style={{ width: 350 }}>
      <Radio.Group
        onChange={handlePositionChange}
        value="top"
        style={{
          marginBottom: 8,
        }}
      >
        {/* <Radio.Button value="top"></Radio.Button> */}
      </Radio.Group>
      <Carousel autoplay dotPosition="top" style={{ width: 550 }}>
        <div style={{ width: 500 }}>
          <Card
            hoverable={true}
            style={{
              width: 500,
              paddingTop: 30,
              display: "flex",
              backgroundColor: "#a7dfe3",
              flexDirection: "column",
            }}
            cover={
              <img
                alt="example"
                src={BurnoutBuddy}
                style={{
                  height: "100%",
                  width: 500,
                  display: "flex",
                  flexDirection: "column",
                }}
              />
            }
            actions={[
              <Button
                type="text"
                icon={
                  <HomeTwoTone
                    style={{ color: "#800797", fontSize: "20px" }}
                    key="link"
                  />
                }
                href="https://burnout-buddy.herokuapp.com/"
              ></Button>,
              <Button
                type="text"
                icon={
                  <GithubFilled
                    style={{ color: "#800797", fontSize: "20px" }}
                    key="link"
                  />
                }
                href="https://github.com/https://github.com/gjferrari/burnout-buddy"
              ></Button>,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg" />
              }
              title="Burnout Buddy"
              description="This BurnoutBuddy App is intended to aid those struggling with work or personal burnout signs and symptoms. Our targeted user might know their available time, (5, 10, 15, 20, or 30 minutes) and be looking for a wellness activity/article that could lead to an improved quality of life. The journal or check-in feature allows the user to record and reflect on their progress and share their completed wellness works with peers also using the application. The sense of accountability and competitiveness we believe aids to our user's progress in their journey of wellness."
            />
          </Card>
        </div>
        <div style={{ width: 500 }}>
          <Card
            hoverable={true}
            style={{
              width: 500,
              paddingTop: 30,
              display: "flex",
              backgroundColor: "#a7dfe3",
              flexDirection: "column",
            }}
            cover={
              <img
                alt="example"
                src={SideHustle}
                style={{
                  height: "100%",
                  width: 500,
                  display: "flex",
                  flexDirection: "column",
                }}
              />
            }
            actions={[
              <Button
                type="text"
                icon={
                  <HomeTwoTone
                    style={{ color: "#800797", fontSize: "20px" }}
                    key="link"
                  />
                }
                href="https://arcane-dusk-42730.herokuapp.com/"
              ></Button>,
              <Button
                type="text"
                icon={
                  <GithubFilled
                    style={{ color: "#800797", fontSize: "20px" }}
                    key="link"
                  />
                }
                href="https://github.com/HunterHarvell/Project-3-Team-2"
              ></Button>,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg" />
              }
              title="SideHustle"
              description="Description of app"
            />
          </Card>
        </div>
        <div style={{ width: 500 }}>
          <Card
            hoverable={true}
            style={{
              width: 500,
              paddingTop: 30,
              display: "flex",
              backgroundColor: "#a7dfe3",
              flexDirection: "column",
            }}
            cover={
              <img
                alt="example"
                src={Jate}
                style={{
                  height: "100%",
                  width: 500,
                  display: "flex",
                  flexDirection: "column",
                }}
              />
            }
            actions={[
              <Button
                type="text"
                icon={
                  <HomeTwoTone
                    style={{ color: "#800797", fontSize: "20px" }}
                    key="link"
                  />
                }
                href="https://just-another-text-editor16.herokuapp.com/"
              ></Button>,
              <Button
                type="text"
                icon={
                  <GithubFilled
                    style={{ color: "#800797", fontSize: "20px" }}
                    key="link"
                  />
                }
                href="https://github.com/gjferrari/pwa-text-editor"
              ></Button>,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg" />
              }
              title="JATE"
              description="Description of app"
            />
          </Card>
        </div>
      </Carousel>
    </div>
  );
};

export default Portfolio;

// const Portfolio = () => {
//   const [dotPosition, setDotPosition] = useState("top");
//   const handlePositionChange = ({ target: { value } }) => {
//     setDotPosition(value);
//   };
//   // const onChange = (currentSlide) => {
//   //   console.log(currentSlide);
//   // };

//   return (
//     <div className="Portfolio" style={{ width: 350 }}>
//       <Radio.Group
//         onChange={handlePositionChange}
//         value="top"
//         style={{
//           marginBottom: 8,
//         }}
//       >
//         {/* <Radio.Button value="top"></Radio.Button> */}
//       </Radio.Group>
//       <Carousel dotPosition="top">
//         <div id="caroCard" style={{ width: 300, height: 600 }}>
//           <Card
//             style={{ width: 300 }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679707119/StandupShot_r7lkic.jpg"
//               />
//             }
//             // actions={[
//             //   <SettingOutlined key="setting" />,
//             //   <EditOutlined key="edit" />,
//             //   <EllipsisOutlined key="ellipsis" />,
//             // ]}
//           >
//             <Meta
//               avatar={
//                 <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg" />
//               }
//               title="About Me"
//               description="This is the description"
//             />
//           </Card>
//         </div>

//         <div style={{ width: 300 }}>
//           <Card
//             style={{ width: 300 }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679707119/StandupShot_r7lkic.jpg"
//               />
//             }
//             // actions={[
//             //   <SettingOutlined key="setting" />,
//             //   <EditOutlined key="edit" />,
//             //   <EllipsisOutlined key="ellipsis" />,
//             // ]}
//           >
//             <Meta
//               avatar={
//                 <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg" />
//               }
//               title="About Me"
//               description="This is the description"
//             />
//           </Card>
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default Portfolio;
