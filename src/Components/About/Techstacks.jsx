import React from "react";
import "./Techstacks.css";

import { FaReact, FaWordpress } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNetlify,
  SiZapier,
  SiIntegromat,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { MdOutlineBugReport } from "react-icons/md";
import { SiHubspot } from "react-icons/si"; // ✅ used for GHL (best CRM match)

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>

        <div className="techsection">
          {/* ✅ GHL (using HubSpot icon – closest CRM icon) */}
          <div>
            <SiHubspot />
            <h5>GHL</h5>
          </div>

          {/* ✅ WordPress */}
          <div>
            <FaWordpress />
            <h5>WordPress</h5>
          </div>

          {/* ✅ Zapier */}
          <div>
            <SiZapier />
            <h5>Zapier</h5>
          </div>

          {/* ✅ Make.com (official icon = Integromat) */}
          <div>
            <SiIntegromat />
            <h5>Make.com</h5>
          </div>

          <div>
            <MdOutlineBugReport />
            <h5>Manual QA</h5>
          </div>

          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>

          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>

          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>

          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>

          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>

          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>

          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
