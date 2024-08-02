import React from "react";
import ReactLogoBW from "../../assets/images/skillsLogo/bw/react.svg";
import ReduxLogoBW from "../../assets/images/skillsLogo/bw/redux.svg";
import CssLogoBW from "../../assets/images/skillsLogo/bw/css.svg";
import JavaLogoBW from "../../assets/images/skillsLogo/bw/java.svg";
import JsLogoBW from "../../assets/images/skillsLogo/bw/js.svg";
import HtmlLogoBW from "../../assets/images/skillsLogo/bw/html.svg";
import PythonLogoBW from "../../assets/images/skillsLogo/bw/python.svg";
import MongoLogoBW from "../../assets/images/skillsLogo/bw/mongo.svg";
import ReactLogoColor from "../../assets/images/skillsLogo/color/react.svg";
import ReduxLogoColor from "../../assets/images/skillsLogo/color/redux.svg";
import CssLogoColor from "../../assets/images/skillsLogo/color/css.svg";
import JavaLogoColor from "../../assets/images/skillsLogo/color/java.svg";
import JsLogoColor from "../../assets/images/skillsLogo/color/js.svg";
import HtmlLogoColor from "../../assets/images/skillsLogo/color/html.svg";
import PythonLogoColor from "../../assets/images/skillsLogo/color/python.svg";
import MongoLogoColor from "../../assets/images/skillsLogo/color/mongo.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";

const logos = [
  {
    src: ReactLogoBW,
    hoverSrc: ReactLogoColor,
    alt: "React logo",
    name: "React Js + Native",
  },
  {
    src: ReduxLogoBW,
    hoverSrc: ReduxLogoColor,
    alt: "Redux logo",
    name: "React Redux",
  },
  { src: HtmlLogoBW, hoverSrc: HtmlLogoColor, alt: "HTML logo", name: "HTML" },
  { src: CssLogoBW, hoverSrc: CssLogoColor, alt: "CSS logo", name: "CSS" },
  {
    src: JsLogoBW,
    hoverSrc: JsLogoColor,
    alt: "JavaScript logo",
    name: "JavaScript",
  },
  {
    src: MongoLogoBW,
    hoverSrc: MongoLogoColor,
    alt: "MongoDB logo",
    name: "MongoDB",
  },
  { src: JavaLogoBW, hoverSrc: JavaLogoColor, alt: "Java logo", name: "Java" },
  {
    src: PythonLogoBW,
    hoverSrc: PythonLogoColor,
    alt: "Python logo",
    name: "Python",
  },
];

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleMouseOver = (e) => {
    e.target.src = e.target.dataset.hover;
  };

  const handleMouseOut = (e) => {
    e.target.src = e.target.dataset.src;
  };

  return (
    <div className="skills-container">
      <h3 className="skills-container-title">Skills</h3>
      <Carousel responsive={responsive} infinite={true}>
        {logos.map((logo, index) => (
          <div className="carousel-item">
            <img
              src={logo.src}
              alt={logo.alt}
              data-src={logo.src}
              data-hover={logo.hoverSrc}
              className="skill-logo"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <p className="skill-name">{logo.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
