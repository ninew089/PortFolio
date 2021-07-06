import React from "react";

import { Box, Divider } from "@material-ui/core";

export default function About() {
  return (
    <>
      <Box fontSize={24} my={2} fontWeight={600}>
        Work Experience
      </Box>
      <Box margin={2}>
        <div>Frontend Developer</div>
        <div>Easyrice Digitak Technology | Febuary 2021 - Present</div>
      </Box>
      <Divider />
    </>
  );
}
