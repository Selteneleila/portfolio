import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import "./Academic.css";

const timelineData = [
  {
    date: "2023",
    content:
      "Bachelor's Degree in Computer Science: Software Engineering and Information Systems",
  },
  {
    date: "2019",
    content:
      " Bachelor's Degree in English Language, Literature and Civilization",
  },
  { date: "2015", content: "Baccalaureat" },
];

export default function Academic() {
  return (
    <>
      <h4>Academic</h4>
      <div className="academic-container">
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.1,
            },
          }}
          className="timeline-container"
        >
          {timelineData.map((item, index) => (
            <TimelineItem key="index" className="timeline-item">
              <TimelineOppositeContent className="timeline-date">
                {item.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="timeline-dot" />
                {index < timelineData.length - 1 && (
                  <TimelineConnector sx={{ backgroundColor: "#9EB7E5" }} />
                )}
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                {item.content}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </>
  );
}
