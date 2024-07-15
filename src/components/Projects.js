import React from "react";
import { Paper, Tab, Tabs, Box } from "@mui/material";
import ReactPlayer from "react-player";
import WasteWatcher from "../assets/wasteWatcher.png";
import LudUp from "../assets/ludup.png";

export default function Projects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const videos = [
    "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  ];

  const images = [
    { src: WasteWatcher, alt: "wasteWatcher design" },
    { src: LudUp, alt: "LudUp design" },
  ];

  return (
    <Paper elevation={3} style={{ padding: "2rem", margin: "2rem" }}>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab label="Programming" />
          <Tab label="Design" />
        </Tabs>
        <Box sx={{ padding: "2rem" }}>
          {value === 0 && (
            <>
              {videos.map((videoUrl, index) => (
                <ReactPlayer key={index} url={videoUrl} />
              ))}
            </>
          )}
          {value === 1 && (
            <>
              {images.map((image, index) => (
                <div key={index}>
                  <button
                    style={{ border: "none", padding: 0, background: "none" }}
                  >
                    <img src={image.src} alt={image.alt} />
                  </button>
                </div>
              ))}
            </>
          )}
        </Box>
      </Box>
    </Paper>
  );
}
