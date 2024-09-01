import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Rupayan Dutta</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        Committed QA An engineer with a keen interest in web development and familiarity with MySQL. competent in JavaScript, HTML, and CSS; at the moment, concentrating on learning React. devoted to using a variety of talents to create dependable and creative web solutions. 
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Rupayan20/"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
  href="mailto:duttarupayan08@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer" 
  aria-label="email"
  className="link link--icon"
>
  <EmailIcon />
</a>

          <a
            href="tel:+916291543493"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/rupayan-dutta-064908195/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1CyYhTINXvIXIISRWXBNGC4usRK0QQhg1/view?usp=sharingg"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
          <a
            href="https://www.facebook.com/rupayandutta2000"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.youtube.com/@Im_rupuu"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
