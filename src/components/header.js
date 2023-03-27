import React from "react";
// import logo from "./logo.svg";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import NavBar from "./Navbar";
// import AboutMe from "./aboutMe";
// import Portfolio from "./portfolio";

function Header() {
  return (
    <div>
      <header className="text-3xl font-bold underline">
        <Avatar
          id="myAvatar"
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
          src={
            "https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg"
          }
          style={{ display: "flex", flexDirection: "column" }}
        />
        <p id="genevieve">Genevieve Ferrari </p>
      </header>
      <body>
        <NavBar />
      </body>
    </div>
  );
}

export default Header;
