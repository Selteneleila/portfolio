import React from "react";
import ReactLogo from "../../assets/react.svg";
import ReduxLogo from "../../assets/redux.svg";
import CssLogo from "../../assets/css.svg";
import JavaLogo from "../../assets/java.svg";
import JsLogo from "../../assets/js.svg";
import HtmlLogo from "../../assets/html.svg";
import PythonLogo from "../../assets/python.svg";
import MongoLogo from "../../assets/mongo.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import "./Skills.css";
import { Paper } from "@mui/material";

const logos = [
  { src: ReactLogo, alt: "React logo", name: "React Js" },
  { src: ReactLogo, alt: "React logo", name: "React Native" },
  { src: ReduxLogo, alt: "Redux logo", name: "React Redux" },
  { src: HtmlLogo, alt: "HTML logo", name: "HTML" },
  { src: CssLogo, alt: "CSS logo", name: "CSS" },
  { src: JsLogo, alt: "JavaScript logo", name: "JavaScript" },
  { src: MongoLogo, alt: "MongoDB logo", name: "MongoDB" },
  { src: JavaLogo, alt: "Java logo", name: "Java" },
  { src: PythonLogo, alt: "Python logo", name: "Python" },
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
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <Paper elevation={3} style={{ padding: "2rem", margin: "2rem" }}>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  {logos.map((logo, index) => (
                    <div className="item" key={index}>
                      <img src={logo.src} alt={logo.alt} />
                      <h5>{logo.name}</h5>
                    </div>
                  ))}
                </Carousel>
              </Paper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
