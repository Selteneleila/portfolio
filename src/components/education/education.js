import React from "react";
import Academic from "./academic/Academic";
import Certificates from "./certificates/Certificates";
import "./Education.css";

export default function Education() {
  return (
    <div className="education-container">
      <Academic />
      <Certificates />
    </div>
  );
}
