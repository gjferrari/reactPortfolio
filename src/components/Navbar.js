//this will be our renderer: will use usestate
import React, { useState } from "react";
import NavBar from "./Navbar";
import AboutMe from "./aboutMe";
import Portfolio from "./portfolio";

function Navbar() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const render = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;

      case "Portfolio":
        return <Portfolio />;

      default:
        return <AboutMe />;
    }
  };

  const renderPageChange = (page) => setCurrentPage(page);
  //   const pages = ["AboutMe", "Portfolio"];
  return (
    <div>
      <ul className="nav nav-tabs">
        <ul className="nav-item">
          <a
            href="#AboutMe"
            onClick={() => renderPageChange("AboutMe")}
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </a>
        </ul>
        <ul className="nav-item">
          <a
            href="#AboutMe"
            onClick={() => renderPageChange("AboutMe")}
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </ul>
      </ul>
      <main>
        <div>{render(currentPage)}</div>
      </main>
    </div>
  );
}
