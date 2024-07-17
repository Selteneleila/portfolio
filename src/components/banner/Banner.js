import React from "react";
import { Button, Grid } from "@mui/material";
import MySvg from "../../assets/logo.svg";
import "./Banner.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Banner() {
  return (
    <Grid className="container" container spacing={1}>
      <Grid item xs={7}>
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
      </Grid>
      <Grid item xs={5}>
        <img src={MySvg} alt="Description of SVG" className="banner-img" />
      </Grid>
    </Grid>
  );
}
