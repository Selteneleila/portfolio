import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

export default function Education() {
  return (
    <>
      <h4>Education</h4>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Bachelor's Degree in Computer Science: Software Engineering and
            Information Systems
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Bachelor's Degree in English Language, Literature and Civilization
          </TimelineOppositeContent>
          <TimelineDot />

          <TimelineContent>2019</TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
