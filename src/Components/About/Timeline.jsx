import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);

  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>

        <VerticalTimeline lineColor={linecolor}>

          {/* ✅ NEW COMPANY – CURRENT ROLE */}
          <VerticalTimelineElement
            date={"June 2025 - Nov 2025"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Senior Virtual Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Scriptures Research and Development
            </h4>
            <p data-aos="fade-right">
              Worked across <b>GHL</b>, <b>WordPress</b>, <b>team management</b>, and <b>client handling</b>.  
              Responsible for workflow automation, website updates, CRM setup, and managing team operations with smooth client communication.
            </p>
          </VerticalTimelineElement>

          {/* ✅ UPDATED DYNAMICP PRO – PREVIOUS COMPANY */}
          <VerticalTimelineElement
            date={"May 2024 - June 2025"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              GHL Developer & QA Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              DynamicPro Technology Solutions
            </h4>
            <p data-aos="fade-right">
              Developed and tested GHL automation systems, handled client projects end-to-end,  
              performed API testing, workflow building, and resolved bugs while managing direct client communication.
            </p>
          </VerticalTimelineElement>

          {/* ✅ OLDER EXPERIENCES (UNCHANGED) */}
          {/* <VerticalTimelineElement
            date={"June 2019 - March 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              QA Engineer & SEO Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Dynamic Tech Sols (Part Time)
            </h4>
            <p data-aos="fade-right">
              Specialized in QA and Application Testing ensuring error-free releases.  
              Also contributed SEO-optimized content for improved visibility and ranking.
            </p>
          </VerticalTimelineElement> */}

          {/* Education */}
          <VerticalTimelineElement
            date={"October 2021 - June 2024"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Bachelor of Technology, ECE
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Institute of Engineering & Management, Kolkata
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"August 2018 - July 2021"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Diploma, ETCE
            </h3>
            <p data-aos="fade-right">Birla Institute of Technology, Kolkata</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"March 2018"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Higher Secondary – Science
            </h3>
            <p data-aos="fade-right">Fulia Sikshaniketan, Fulia, West Bengal</p>
          </VerticalTimelineElement>

          {/* Star Ending */}
          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
          />
        </VerticalTimeline>
      </div>
    </>
  );
};
