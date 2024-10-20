import React from "react";
import { Button, Grid, useMediaQuery } from "@mui/material";
import MySvg from "../../assets/images/logo.svg";
import "./About.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function AboutMe() {
  const isSmallScreen = useMediaQuery("(max-width:450px)");

  return (
    <div className="about-container">
      {isSmallScreen ? (
        <div className="text-container">
          <h1>Hi, I'm Leila</h1>
          <h2>A Software Developer Graduate!</h2>
          <Button
            endIcon={<ArrowRightIcon />}
            className="connect-btn"
            variant="outlined"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/leila-selten-951158242",
                "_blank"
              )
            }
          >
            Let's connect
          </Button>
        </div>
      ) : (
        <>
          <div className="text-container">
            <h1>Hi, I'm Leila</h1>
            <h2>A Software Developer Graduate!</h2>
            <Button
              endIcon={<ArrowRightIcon />}
              className="connect-btn"
              variant="outlined"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/leila-selten-951158242",
                  "_blank"
                )
              }
            >
              Let's connect
            </Button>
          </div>
          <img src={MySvg} alt="Description of SVG" className="svg-img" />
        </>
      )}
    </div>
  );
}
