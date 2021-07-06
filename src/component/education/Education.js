import React from "react";

import { Box, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export default function Education() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <div>
        <Box fontSize={24} my={2} fontWeight={600}>
          Education
        </Box>
      </div>

      <Box style={{ margin: 10 }}>
        <div>2017 - 2021</div>

        <strong>B.S. Computer Science</strong>
        <div>Chulalongkorn University (Bangkok, Thailand)</div>

        <div>2010 - 2016</div>

        <strong>Traimudomsuksapattanakarn (Bangkok, Thailand)</strong>
      </Box>
    </>
  );
}
