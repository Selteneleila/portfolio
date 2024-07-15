import React from "react";
import ReactLogo from "../assets/react.svg";
import ReduxLogo from "../assets/redux.svg";
import CssLogo from "../assets/css.svg";
import JavaLogo from "../assets/java.svg";
import JsLogo from "../assets/js.svg";
import HtmlLogo from "../assets/html.svg";
import PythonLogo from "../assets/python.svg";
import MongoLogo from "../assets/mongo.svg";
import { Paper } from "@mui/material";

const logos = [
  ReactLogo,
  ReduxLogo,
  HtmlLogo,
  CssLogo,
  JsLogo,
  MongoLogo,
  JavaLogo,
  PythonLogo,
];

const groupLogos = (logos, groupSize) => {
  const groups = [];
  for (let i = 0; i < logos.length; i += groupSize) {
    groups.push(logos.slice(i, i + groupSize));
  }
  return groups;
};

const logoGroups = groupLogos(logos, 4);

export default function Skills() {
  return (
    <Paper elevation={3} style={{ padding: "2rem", margin: "2rem" }}>
      <h4>Skills</h4>
      <div className="custom-carousel" data-bs-theme="dark">
        {logoGroups.map((group, index) => (
          <div key={index}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {group.map((logo, idx) => (
                <img
                  key={idx}
                  className="d-block logo"
                  src={logo}
                  alt="logo"
                  style={{
                    width: "15%",
                    padding: "1rem",
                    marginBottom: "3rem",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Paper>
  );
}
