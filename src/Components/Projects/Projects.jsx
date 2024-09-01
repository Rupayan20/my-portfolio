import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/FVyNP27/Screenshot-2024-08-31-235005.png" 
                  alt="Mail Chimp"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Ryne & Olive</h2>
              <p>
              Created a food delivery platform on Bubble.io in accordance with client requirements and to improve user experience; additionally, I participated as a QA engineer to guarantee quality.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://ryne-olive.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                {/* <a
                  href="https://github.com/harshchaturvedi1/mailChimp-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src="https://i.ibb.co/Yjv3ctq/Screenshot-2024-09-01-091339.png"
                  alt="Myntra"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Campus Buddy</h2>
              <p>
              Introducing Campus Buddy, a cutting-edge campus management system designed to revolutionize the educational landscape. Campus Buddy is crafted to streamline and enhance administrative processes in schools, colleges, and institutions, offering a comprehensive solution for effective campus management.
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://campus-buddy-seven.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Kaushan-Dutta/campus-buddy-fe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img 
              src="https://i.ibb.co/CWzBxNZ/Screenshot-2024-09-01-092531.png" 
                alt=""
               />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>PetZee </h2>
              <p>
              PetZee provides a comprehensive range of pet services, including pet shops, food shops, hospitals, creches, and shelters etc. We also offer a news and video section to keep pet owners and pet lovers up-to-date with the latest trends and happenings in the pet world. 
              </p>
              <div>
              <IoLogoJavascript />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://github.com/Rupayan20/Project-PetZee"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/t2qqppq/Screenshot-2024-09-01-093405.png"
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Predicting Optimal Solar Cell Design for Enhanced Degradation Resistance based on Environmental Conditions Using Machine Learning</h2>
              <p>
              Created a machine learning system that, in response to environmental inputs, forecasts the ideal solar cell design, guaranteeing optimum efficiency and preserving a decrease to 80% on peak days.
              </p>
              <div>
              <SiPython />
              </div>
              <div>
                <a
                  href="https://ieeexplore.ieee.org/document/10627912"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See My Publication
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/Yhk17bc/Screenshot-2024-09-01-094549.png"
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Unveiling Optimal Design and Performance of Perovskite Solar Cells through Genetic Algorithm</h2>
              <p>
              Genetic Algorithm in Python was used to investigate and refine solar cell characteristics, leading to the creation of a unique fitness function that produced the intended results by the eighth generation.
              </p>
              <div>
                <SiPython />
              </div>
              <div>
                <a
                  href="https://ieeexplore.ieee.org/abstract/document/10468305"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See My Publication
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
