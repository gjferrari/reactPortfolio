//this will be our renderer: will use usestate
import React, { useState } from "react";
// import NavBar from "./Navbar";
import AboutMe from "./aboutMe";
import Portfolio from "./portfolio";

function NavBar() {
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
              href="#Portfolio"
              onClick={() => renderPageChange("Portfolio")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </ul>
        </ul>
      </div>
      <main>
        <div className="myCard">
          <div>{render(currentPage)}</div>
        </div>
      </main>
    </div>
  );
}

export default NavBar;
