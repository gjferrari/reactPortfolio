import React from "react";
// import logo from "./logo.svg";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import NavBar from "./Navbar";
// import AboutMe from "./aboutMe";
// import Portfolio from "./portfolio";

function Header() {
  return (
    <header className="text-3xl font-bold underline">
      <Avatar
        // src={<img src={url} alt="avatar" />}
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        icon={<AntDesignOutlined />}
        src={
          "https://res.cloudinary.com/da6r9i8q5/image/upload/v1679770193/Genevieve_Ferrari_Headshot_gvyku1.jpg"
        }
      />
      <p>Genevieve Ferrari </p>
      <NavBar />
    </header>
  );
}

export default Header;
