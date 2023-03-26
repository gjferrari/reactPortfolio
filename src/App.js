import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/header";

// import AboutMe from "./components/aboutMe";
// import NavBar from "./components/Navbar";

// import Portfolio from "./components/portfolio";
// import Test from "./components/test";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <main>
        {/* <NavBar /> */}
        {/* <div className="myCard">
          <AboutMe />
          <Portfolio />
        </div> */}
      </main>

      <Footer />
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
