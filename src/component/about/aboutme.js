import React from "react";

import { Box, Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import profile from "../../assets/img/profile/img.JPG";
import transcript from "../../assets/pdf/transcript.pdf";
import cv from "../../assets/pdf/CV.pdf";

export default function About() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div
      style={{
        margin: 60,
        position: matches ? "fixed" : "",
        float: "left",
        width: 400,
      }}
    >
      <Box fontSize={24} fontWeight={900}>
        About me
      </Box>
      <Box fontSize={16} my={2} fontWeight={500}>
        Hi,My name is
      </Box>

      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        spacing={6}
      >
        <img
          src={profile}
          alt=""
          height="180px"
          width="180px"
          style={{ borderRadius: 1000, textAlign: "center" }}
        />
      </Grid>

      <Box fontSize={24} fontWeight={900} margin={"20px 100px 10px 0px"}>
        Jittanan Jakthreemongkol.
      </Box>
      <Box fontSize={14} fontWeight={400}>
        &nbsp; &nbsp; &nbsp;If you are interested in me, feel free to contact!
      </Box>
      <Box fontSize={18} my={2} fontWeight={600}>
        Contact
      </Box>
      <Box fontSize={14} my={2} fontWeight={600}>
        <div>email: jittanan.jck@gmail.com</div>
        <div>tel: 085-491-5651</div>
        <div>line: new.jck</div>
        <div style={{ display: "inline-flex" }}>
          github :{" "}
          <a
            href="https://github.com/ninew089/"
            target="blank"
            style={{ color: "#2d6bf9", textDecoration: "none" }}
          >
            ninew089
          </a>
        </div>
        <div>
          linkedin :
          <a
            href="https://www.linkedin.com/in/jittanan-jkn-7468b3157/"
            target="blank"
            style={{ color: "#2d6bf9", textDecoration: "none" }}
          >
            @jittanan.jkn
          </a>
        </div>
      </Box>
      <Box fontSize={18} my={2} fontWeight={600}>
        Download
      </Box>
      <Box fontSize={18} my={2} fontWeight={600}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginRight: 10 }}>
            <a
              href={transcript}
              target="blank"
              style={{ color: "#2d6bf9", textDecoration: "none" }}
            >
              transcript
            </a>
          </div>
          <div>
            <a
              href={cv}
              target="blank"
              style={{ color: "#2d6bf9", textDecoration: "none" }}
            >
              cv
            </a>
          </div>
        </div>
      </Box>
    </div>
  );
}
