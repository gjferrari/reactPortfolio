import React, { useState } from "react";
import { GithubFilled, HomeTwoTone } from "@ant-design/icons";
import { Avatar, Card, Carousel, Radio, Button } from "antd";
// import { useState } from "react";
import SideHustle from "../assets/SideHustle.png";
import BurnoutBuddy from "../assets/burnout-buddy.png";
import Jate from "../assets/JATE.png";
import NoteTaker from "../assets/notetaker.png";
import SocialMedia from "../assets/Social-Media-Api.png";
import Team from "../assets/Team.png";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const { Meta } = Card;

const Portfolio = () => {
  const [projects] = useState([
    {
      title: "Burnout Buddy",
      imgAsset: BurnoutBuddy,
      description:
        "This BurnoutBuddy App is intended to aid those struggling with work or personal burnout signs and symptoms.Our targeted user might know their available time, (5, 10, 15, 20, or 30 minutes) and be looking for a wellness activity/article that could lead to an improved quality of life. The journal or check-in feature allows the user to record and reflect on their progress and share their completed wellness works with peers also using the application. The sense of accountability and competitiveness we believe aids to our user's progress in their journey of wellness.",
      deployedUrl: "https://burnout-buddy.herokuapp.com/",
      repoUrl: "https://github.com/gjferrari/burnout-buddy",
    },
    {
      title: "Side Hustle",
      imgAsset: SideHustle,
      description:
        "This project is a fantastic user-focused MERN app for a small or self employed business person who wants to be able to track their SideHussle income & expenses to estimate budget and reach their business goals.",
      deployedUrl: "https://arcane-dusk-42730.herokuapp.com/",
      repoUrl: "https://github.com/HunterHarvell/Project-3-Team-2",
    },
    {
      title: "JATE: Text Editor",
      imgAsset: Jate,
      description:
        "This application uses existing code for a text editor application (JATE) and implements methods for getting and storing data to an IndexedDB database so the resulting application can function offline. The user can use J.A.T.E to write notes or code in both the browser and the installed application; data will persist across both!",
      deployedUrl: "https://just-another-text-editor16.herokuapp.com/",
      repoUrl: "https://github.com/gjferrari/pwa-text-editor",
    },
    {
      title: "Express.JS: Note Taker",
      imgAsset: NoteTaker,
      description:
        "This application can be used to write and save notes; it uses an Express.js back end and will save and retrieve note data from a JSON file.The api and html routes are included in the server.js file instead of the api/controller folder, however these folders and routes have been included to document the troubleshooting process and serve as scafolding for a second, more complex build.",
      deployedUrl: "https://greatestnotetaker.herokuapp.com/notes",
      repoUrl: "https://github.com/gjferrari/Express.js-note-taker",
    },
    {
      title: "Social Network API",
      imgAsset: SocialMedia,
      description:
        "This challenge was to build an API for a social network web application where users could share their thoughts, react to friends thoughts, and create a friend list.For this application I used Express.js for routing, a MongoDB database, and the Mongoose ODM. To format timestamps I used the the native JavaScript Date object. In order to test the api, I used Insomnia to test all routes; you can watch a walk-through video of that process in the video section of my repository!",
      deployedUrl: "https://github.com/gjferrari/social-network-API",
      repoUrl: "https://github.com/gjferrari/social-network-API",
    },
    {
      title: "Team Profile Generator",
      imgAsset: Team,
      description:
        "This command-line application takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
      deployedUrl: "https://github.com/gjferrari/team-profile-generator-",
      repoUrl: "https://github.com/gjferrari/team-profile-generator-",
    },
  ]);

  const [dotPosition, setDotPosition] = useState("top");
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <div id="project-wrapper">
      {projects.map((project) => (
        <div className="Portfolio" style={{ width: 500 }}>
          <Radio.Group
            onChange={handlePositionChange}
            value="top"
            style={{
              marginBottom: 8,
            }}
          >
            {/* <Radio.Button value="top"></Radio.Button> */}
          </Radio.Group>

          <Carousel dotPosition="top" style={{ width: 500 }}>
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
                    src={project.imgAsset}
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
                    href={project.deployedUrl}
                  ></Button>,
                  <Button
                    type="text"
                    icon={
                      <GithubFilled
                        style={{ color: "#800797", fontSize: "20px" }}
                        key="link"
                      />
                    }
                    href={project.repoUrl}
                  ></Button>,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg" />
                  }
                  title={project.title}
                  description={project.description}
                />
              </Card>
            </div>
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
