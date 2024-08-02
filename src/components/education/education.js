import React from "react";
import { Grid } from "@mui/material";
import Academic from "./academic/Academic";
import Certificates from "./certificates/Certificates";
import "./Education.css";

export default function Education() {
  return (
    <Grid container spacing={1} className="education-container">
      <Grid item xs={12} sm={6}>
        <Academic />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Certificates />
      </Grid>
    </Grid>
  );
}
