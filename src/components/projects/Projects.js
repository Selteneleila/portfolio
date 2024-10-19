import React from "react";
import { Tab, Tabs } from "@mui/material";
import WasteWatcher from "../../assets/images/projectImages/wasteWatcher.png";
import LudUp from "../../assets/images/projectImages/ludup.png";
import LudUpPDF from "../../assets/pdf/ludUp.pdf";
import WasteWatcherPDF from "../../assets/pdf/wasteWatcher.pdf";
import CreditScoreDemo from "../../assets/videos/credit-score-demo.mp4";
import "./Project.css";

export default function Projects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  const videos = [{ src: CreditScoreDemo, name: "Credit Score App Demo" }];

  const images = [
    {
      src: WasteWatcher,
      alt: "wasteWatcher design",
      name: "WasteWatcher",
      details: WasteWatcherPDF,
    },
    { src: LudUp, alt: "LudUp design", name: "LudUp", details: LudUpPDF },
  ];

  return (
    <div className="project-container">
      <Tabs
        className="tab-root"
        centered
        value={value}
        onChange={handleChange}
        textColor="#f9f0ff"
        indicatorColor="#af98e8"
        style={{
          borderRadius: "2rem",
        }}
      >
        <Tab label="Programming" />
        <Tab label="Design" />
      </Tabs>
      <div className="tab-content">
        {value === 0 &&
          videos.map((video, index) => (
            <div className="video-container">
              <video controls className="video-player">
                <source src={video.src} type="video/mp4" />
              </video>
              <h5>{video.name}</h5>
            </div>
          ))}
        {value === 1 &&
          images.map((image, index) => (
            <div className="img-container" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => handleClick(image.details)}
              />
              <h5>{image.name}</h5>
            </div>
          ))}
      </div>
    </div>
  );
}
