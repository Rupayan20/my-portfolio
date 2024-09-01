import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a
          href="https://www.linkedin.com/in/rupayan-dutta-064908195/"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className="footer">Made with ❤ By myself-rupayan</h3>
        </a>
      </div>
    </>
  );
};
