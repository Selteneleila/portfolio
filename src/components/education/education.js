import React from "react";
import { Grid } from "@mui/material";
import Academic from "./academic/academic";
import Certificates from "./certificates/certificates";
import "./education.css";

export default function Education() {
  return (
    <Grid container spacing={1} className="education-container">
      <Grid item xs={12} sm={6}>
        <Academic className="academic-container" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Certificates className="certificate-container" />
      </Grid>
    </Grid>
  );
}
