import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  Divider,
  Slide,
  useMediaQuery,
  useScrollTrigger,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Education from "./component/education/Education";
import Skill from "./component/skill/Skill";
import Accomplishments from "./component/accomplishment/Accomplishment";
import About from "./component/about/aboutme";
import Project from "./component/project/Project";
import Work from "./component/work/Work";
import Workshop from "./component/workshop/Workshop";
import Certificate from "./component/certificate/Certificate";
const THEME = createMuiTheme({
  typography: {
    fontFamily: ["Work Sans"].join(","),
  },
});
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ThemeProvider theme={THEME}>
      <div style={{ display: "flex", position: "absolute" }}>
        <div style={{ background: "#f5f5f5", color: "#222222" }}></div>
        <CssBaseline />

        <AppBar
          style={{ background: "#f5f5f5", color: "#222222" }}
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              jittanan j.{" "}
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container direction="row" justify="center">
          <Grid items xs={12} sm={12} md={5} lg={5}>
            <About />
          </Grid>
          <Grid items xs={12} sm={12} md={6} lg={6}>
            <section
              style={{
                isolation: "isolate",
                maxWidth: "100%",
                overflowX: "hidden",
                margin: 10,
              }}
            >
              <Box
                style={{
                  margin: matches ? "60px 0px 0px 0px" : "0px 60px 60px 60px",
                }}
              >
                <Education />
                <Divider />
                <Skill />
                <Divider />
                <Accomplishments />
                <Divider />
                <Project />
                <Work />

                <Workshop />
                <Certificate />
              </Box>
            </section>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
