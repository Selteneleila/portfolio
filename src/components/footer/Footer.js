import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "./footer.css";

const socialNetworkData = [
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/leila-selten-951158242",
  },
  {
    icon: <GitHubIcon />,
    link: "https://www.github.com/Selteneleila",
  },
];

const contactData = [
  {
    icon: <PhoneAndroidIcon />,
    content: "+372 5456 1855",
  },
  {
    icon: <HomeIcon />,
    content: "Tallinn, Estonia",
  },
  {
    icon: <AlternateEmailIcon />,
    content: "layla_seltene@live.fr",
  },
];

export default function Footer() {
  return (
    <div id="footer-container">
      <div className="social-container">
        <h3 className="social-container-title">Connect with Me</h3>
        {socialNetworkData.map((social, index) => (
          <div className="social-wrapper">
            <div className="social-icon">{social.icon}</div>
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
      <div className="contact-container">
        <h3 className="contact-container-title">Contact</h3>
        {contactData.map((contact, index) => (
          <div className="contact-wrapper" key={index}>
            <div className="contact-icon">{contact.icon}</div>
            <div className="contact-content">
              <p>{contact.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
