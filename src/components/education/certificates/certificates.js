import { Box, Grid, Modal, Stack } from "@mui/material";
import Coursera from "../../../assets/images/certLogos/coursera.svg";
import Udemy from "../../../assets/images/certLogos/udemy.svg";
import Fcc from "../../../assets/images/certLogos/fcc.svg";
import JavaUdemy from "../../../assets/images/certificates/javaCertUdemy.jpg";
import PythonUdemy from "../../../assets/images/certificates/pythonCertUdemy.jpg";
import JsUdemy from "../../../assets/images/certificates/jsCertUdemy.jpg";
import JsFcc from "../../../assets/images/certificates/JsFcc.jpg";
import WebFcc from "../../../assets/images/certificates/responsiveWebFcc.jpg";
import WebCoursera from "../../../assets/images/certificates/webCoursera.jpg";
import "./certificates.css";
import React, { useState } from "react";

const certificatesData = [
  {
    logo: Coursera,
    alt: "coursera logo",
    courses: [
      {
        title: "HTML, CSS and Javascript for Web developers",
        cert: WebCoursera,
      },
    ],
  },

  {
    logo: Fcc,
    alt: "fcc logo",
    courses: [
      { title: "Responsive Web Design (2022)", cert: JsFcc },
      { title: "JavaScript Algorithms and Data Structure", cert: WebFcc },
    ],
  },
  {
    logo: Udemy,
    alt: "udemy logo",
    courses: [
      {
        title: "Java Programming: Complete Beginner to Advanced",
        cert: JavaUdemy,
      },
      { title: "JavaScript, Basic to Advanced", cert: JsUdemy },
      {
        title: "Python Programming Beyond the Basics & Intermidate Training",
        cert: PythonUdemy,
      },
    ],
  },
];

export default function Certificates() {
  const [open, setOpen] = React.useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const handleOpen = (certSrc) => {
    setSelectedCert(certSrc);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };
  return (
    <>
      <h4>Certificates</h4>
      <div className="certificate-container">
        <Grid container spacing={2}>
          {certificatesData.map((cert, index) => (
            <React.Fragment key={index}>
              <div className="certificate-section">
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={3}>
                    <img src={cert.logo} alt={cert.alt} className="cert-logo" />
                  </Grid>
                  <Grid item xs={9}>
                    <Stack>
                      {cert.courses.map((course, i) => (
                        <React.Fragment key={i}>
                          <p
                            onClick={() => handleOpen(course.cert)}
                            className="course-title"
                          >
                            {course.title}
                          </p>
                        </React.Fragment>
                      ))}
                      <Modal
                        open={open}
                        onClose={handleClose}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            width: "80%",
                            maxWidth: 800,
                            bgcolor: "transparent",
                            border: "none",
                            boxShadow: "none",
                            p: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {selectedCert && (
                            <img
                              className="cert-img"
                              src={selectedCert}
                              alt="Certificate showing course completion"
                              style={{
                                maxWidth: "100%",
                                maxHeight: "80vh",
                                objectFit: "contain",
                              }}
                            />
                          )}
                        </Box>
                      </Modal>
                    </Stack>
                  </Grid>
                </Grid>
              </div>
            </React.Fragment>
          ))}
        </Grid>
      </div>
    </>
  );
}
