//this will be our renderer: will use usestate
import React, { useState } from "react";
// import NavBar from "./Navbar";
import AboutMe from "./aboutMe";
import ContactMe from "./ContactMe";
import Portfolio from "./portfolio";

function NavBar() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const render = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;

      case "Portfolio":
        return <Portfolio />;

      case "ContactMe":
        return <ContactMe />;

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
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </ul>
          <ul className="nav-item">
            <a
              href="#ContactMe"
              onClick={() => renderPageChange("ContactMe")}
              className={
                currentPage === "ContactMe" ? "nav-link active" : "nav-link"
              }
            >
              Contact Me
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
