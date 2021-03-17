import React from "react";

import { Box, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export default function Education() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box fontSize={24} my={2} fontWeight={600}>
        Skills
      </Box>
      <Box style={{ margin: 20 }}>
        <div>• Languages : Javascript ,HTML ,CSS ,TypeScript,Python,Java</div>
        <div>• Frameworks : ReactJs</div>
        <div>• Tools : Git</div>
        <div>• UI/UX Design: Figma</div>
      </Box>
    </>
  );
}
