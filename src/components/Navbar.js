//this will be our renderer: will use usestate
import React, { useState } from "react";
import NavBar from "./Navbar";
import AboutMe from "./aboutMe";
import Portfolio from "./portfolio";

function Navbar() {
  const [curentPage, setCurrentPage] = useState("AboutMe");

  const render = () => {
    switch (setCurrentPage) {
      case "AboutMe":
        return <AboutMe />;

      case "Portfolio":
        return <Portfolio />;

      default:
        return <AboutMe />;
    }
  };

  const renderPageChange = (page) => setCurrentPage(page);
  return <div></div>;
}
