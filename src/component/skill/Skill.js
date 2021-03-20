import React from "react";

import { Box } from "@material-ui/core";

export default function Education() {
  return (
    <>
      <Box fontSize={24} my={2} fontWeight={600}>
        Skills
      </Box>
      <Box style={{ margin: 20 }}>
        <div>
          • Languages : Javascript ,HTML ,CSS ,TypeScript, Python, Java,
          TypeScript
        </div>
        <div>• Frameworks : ReactJs,React Native, Next.js, Golang</div>
        <div>• Tools : Git</div>
        <div>• UI/UX Design: Figma</div>
      </Box>
    </>
  );
}
