import React from "react";
import "./Projects.css";

// ✅ ICON IMPORTS — All valid & safe
import { FaReact, FaWordpress, FaCog } from "react-icons/fa"; // GoHighLevel substitute = FaCog
import { MdOutlineBugReport } from "react-icons/md"; // Manual QA
import {
  SiGooglesheets,
  SiZapier,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiCanva,
  SiPython,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5"; // GoHighLevel substitute
import { SiFigma } from "react-icons/si";
import { GiSettingsKnobs } from "react-icons/gi"; // for Pabbly alternative
import { FaCloud } from "react-icons/fa";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        {/* ✅ Leads Up AI */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/Y4RVgRfq/Screenshot-2025-11-11-213438.png"
                  alt="Leads Up AI"
                />
              </div>
            </div>

            <div className="project_information" data-aos="fade-right">
              <h2>Leads Up AI</h2>
              <p>
                As a Senior VA in GoHighLevel, I supported Leads Up AI by
                managing pipelines, refining workflows and ensuring smooth
                delivery of AI-qualified seller leads. I kept accounts
                organized, improved automation accuracy and maintained clean
                reporting, helping the team operate efficiently and serve
                clients better.
              </p>

              <div>
                <FaCog /> {/* GoHighLevel substitute */}
                <FaWordpress /> {/* WordPress */}
                <SiZapier /> {/* Zapier */}
                <SiCanva /> {/* Canva */}
              </div>

              <div>
                <a
                  href="https://leadsupai.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Zenoti & GoHighLevel Integration */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/pgJtytP/Whats-App-Image-2025-11-11-at-23-16-56-70c26c9e.jpg"
                  alt="Zenoti & GoHighLevel Integration"
                />
              </div>
            </div>

            <div className="project_information" data-aos="fade-right">
              <h2>Zenoti & GHL Integration</h2>
              <p>
                Worked on a healthcare project integrating Zenoti and
                GoHighLevel into a unified dashboard. I built automations,
                optimized pipelines, set up calendars, and created funnels and
                email templates. As a Manual QA, I verified data accuracy and
                workflow behavior across both platforms.
              </p>

              <div>
                <FaCog /> {/* GoHighLevel substitute */}
                <MdOutlineBugReport /> {/* Manual QA */}
                <SiZapier /> {/* Zapier */}
                <SiGooglesheets /> {/* Google Sheets */}
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Daniel Aaron GHL Migration */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/d4K0DTZj/Screenshot-2025-11-11-234512.png"
                  alt="Daniel Aaron GHL Migration"
                />
              </div>
            </div>

            <div className="project_information" data-aos="fade-right">
              <h2>Daniel Aaron GHL Migration</h2>
              <p>
                Migrated Daniel Aaron’s entire website from WordPress to
                GoHighLevel, including funnel pages, automations, calendar
                booking, and product setup. Rebuilt the site structure inside
                GHL to improve speed, user flow, and platform consistency.
              </p>

              <div>
                <FaCog /> {/* GoHighLevel */}
                <FaWordpress /> {/* WordPress */}
              </div>

              <div>
                <a
                  href="https://danielaaron.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ The NoMore9to5 Club */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/SXkKn98q/Screenshot-2025-11-11-233538.png"
                  alt="The NoMore9to5 Club"
                />
              </div>
            </div>

            <div className="project_information" data-aos="fade-right">
              <h2>The NoMore9to5 Club</h2>
              <p>
                Developed a platform that offers memberships, services, and
                events with integrated chatbot support. It brings data and
                interactions from multiple sources into one seamless experience,
                improving user engagement and simplifying customer management.
              </p>

              <div>
                <FaCog /> {/* GoHighLevel */}
                <GiSettingsKnobs /> {/* Pabbly */}
                <SiFigma /> {/* Figma */}
                <SiGooglesheets /> {/* Google Sheets */}
              </div>

              <div>
                <a
                  href="https://thenomore9to5club.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Royalty Renewables */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/Mk24cBDN/Screenshot-2025-11-12-000424.png"
                  alt="Royalty Renewables"
                />
              </div>
            </div>

            <div className="project_information" data-aos="fade-right">
              <h2>Royalty Renewables</h2>
              <p>
                Worked on the Royalty Renewables project where the custom team built a CRM platform. I handled end-to-end testing—covering regression, unit, sanity, and smoke testing—across Super Admin, Admin, and Customer portals based on their specific feature access.
              </p>

              <div>
                <MdOutlineBugReport /> {/* Manual QA */}
                <SiGooglesheets /> {/* Google Sheets */}
              </div>

              <div>
                <a
                  href="https://www.royaltyrenewables.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Ryne & Olive */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/FVyNP27/Screenshot-2024-08-31-235005.png"
                  alt="Ryne & Olive"
                />
              </div>
            </div>

            <div className="project_information" data-aos="fade-right">
              <h2>Ryne & Olive</h2>
              <p>
                Created a food delivery platform on Bubble.io based on the
                client's requirements and UI needs. Also participated as a QA
                engineer to ensure smooth functionality and bug-free operations.
              </p>

              <div>
                <FaCloud /> {/* Bubble.io */}
                <MdOutlineBugReport /> {/* Manual QA */}
                <SiGooglesheets /> {/* Google Sheets */}
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
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Publication 1 */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/t2qqppq/Screenshot-2024-09-01-093405.png"
                  alt="Solar Cell ML"
                />
              </div>
            </div>

            <div className="project_information" data-aos="fade-right">
              <h2>Predicting Optimal Solar Cell Design</h2>
              <p>
                Built a machine learning model to predict optimal solar cell
                structure based on environmental data. Aimed at improving
                performance while minimizing degradation.
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

        {/* ✅ Publication 2 */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/Yhk17bc/Screenshot-2024-09-01-094549.png"
                  alt="Genetic Algorithm"
                />
              </div>
            </div>

            <div className="project_information" data-aos="fade-right">
              <h2>Perovskite Solar Cells – Genetic Algorithm</h2>
              <p>
                Used Python and Genetic Algorithm to optimize solar cell
                parameters. Achieved optimal results within eight evolution
                cycles using a custom fitness-based model.
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
