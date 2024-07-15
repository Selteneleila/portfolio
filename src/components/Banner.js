import React from "react";
import { Box, Button, Grid } from "@mui/material";
import MySvg from "../assets/logo.svg";

export default function Banner() {
  return (
    <>
      <Box className="container">
        <div className="boxStyle">
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={8}>
              <h1 className="textStyle">Hi, I'm Leila</h1>
              <h2 className="textStyle">A Software Developer Graduate!</h2>
              <Button
                variant="outlined"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/yourprofile",
                    "_blank"
                  )
                }
              >
                Let's connect
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img src={MySvg} alt="Description of SVG" className="imgStyle" />
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
