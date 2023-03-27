import React from "react";
import { Button } from "antd";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";

function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        // flexDirection: "flex-end",
        justifyContent: "flex-end",
        marginTop: "auto"
        // position: "absolute",
      }}
    >
      <Button
        type="text"
        icon={
          <LinkedinFilled
            style={{ color: "#800797", fontSize: "20px" }}
            key="link"
          />
        }
        href="https://www.linkedin.com/in/genevieve-ferrari-17001178/"
      ></Button>

      <Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#800797", fontSize: "20px" }}
            key="link"
          />
        }
        href="https://github.com/gjferrari"
      ></Button>

      <Button
        type="text"
        icon={
          <MailFilled
            style={{ color: "#800797", fontSize: "20px" }}
            key="link"
          />
        }
        href="https://github.com/gjferrari"
      ></Button>
    </footer>
  );
}

export default Footer;

// just getting basic code in the structure
