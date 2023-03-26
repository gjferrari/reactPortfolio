import React from "react";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Avatar, Card, Carousel, Radio, Button } from "antd";
import { useState } from "react";
import SideHustle from "../assets/expensesScreenShot.png";
import BurnoutBuddy from "../assets/burnout-buddy.png";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
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
      <Carousel dotPosition="top">
        <div id="caroCard" style={{ width: 300, height: 600 }}>
          <Card
            hoverable={true}
            style={{ width: 300, display: "flex", flexDirection: "column" }}
            cover={<img alt="example" src={SideHustle} />}
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
              title="SideHustle"
              description="Description of app"
            />
          </Card>
        </div>

        <div style={{ width: 300 }}>
          <Card
            hoverable={true}
            style={{ width: 300, display: "flex", flexDirection: "column" }}
            cover={<img alt="example" src={BurnoutBuddy} />}
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
              title="Burnout Buddy"
              description="Burnout Buddy description"
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
