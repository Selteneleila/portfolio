import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "./Footer.css";

const socialNetworkData = [
  {
    icon: <LinkedInIcon className="social-icon" />,
    link: "https://www.linkedin.com/in/leila-selten-951158242",
  },
  {
    icon: <GitHubIcon className="social-icon" />,
    link: "https://www.github.com/Selteneleila",
  },
  {
    icon: <AlternateEmailIcon className="social-icon" />,
    link: "layla_seltene@live.fr",
  },
];

export default function Footer() {
  return (
    <div className="footer-container">
      <h3 className="social-container-title">Connect with Me :</h3>
      {socialNetworkData.map((social, index) => (
        <div className="social-wrapper">
          {social.icon}
          <a
            className="link-content"
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.link}
          </a>
        </div>
      ))}
    </div>
  );
}
