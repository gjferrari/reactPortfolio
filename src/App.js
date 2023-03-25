import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
// import Header from "./components/header";

import AboutMe from "./components/aboutMe";
import Portfolio from "./components/portfolio";
import Test from "./components/test";

function App() {
  return (
    <div className="App">
      <header className="text-3xl font-bold underline">
        <Avatar
          // src={<img src={url} alt="avatar" />}
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
          src={
            "https://res.cloudinary.com/da6r9i8q5/image/upload/v1679704914/Genevieve_Ferrari_Headshot_xulyob.jpg"
          }
        />
        <p>Genevieve Ferrari</p>
        <a
        // className="App-link"
        // href="https://reactjs.org"
        // target="_blank"
        // rel="noopener noreferrer"
        ></a>
      </header>
      <div className="myCard">
        {/* <AboutMe /> */}
        <Portfolio />
        {/* <Test /> */}
      </div>
    </div>
  );
}

export default App;

// import { UserOutlined } from '@ant-design/icons';
// import { Avatar, Space } from 'antd';
// import React from 'react';

// const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

// const App: React.FC = () => (
//   <Space size={16} wrap>
//     <Avatar icon={<UserOutlined />} />
//     <Avatar>U</Avatar>
//     <Avatar size={40}>USER</Avatar>
// <Avatar src={url} />
//     <Avatar src={<img src={url} alt="avatar" />} />
//     <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
//     <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
//   </Space>
// );

// export default App;
