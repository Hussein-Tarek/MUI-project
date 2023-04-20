import React from "react";
import Typewriter from "typewriter-effect";

import styled from "@mui/material/styles/styled";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import heroBg from "../assets/img/hero-bg.jpg";

const MyHero = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: "160px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  background: `url(${heroBg}) top right no-repeat `,
  backgroundSize: "cover",
  position: "relative",
  "&::before": {
    content: '""',
    background: "rgba(255, 255, 255, 0.8)",
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
}));

const style = {
  color: "#45505b",
  marginRight: "20px",
};

const Info = styled("div")((theme) => ({
  position: "absolute",
  zIndex: 1,
}));

const Hero = () => {
  return (
    <>
      <MyHero>
        <Container>
          <Info>
            <Typography
              variant="h1"
              sx={{
                margin: 0,
                fontSize: "64px",
                fontWeight: 700,
                lineHeight: "56px",
                color: "#45505b",
              }}
            >
              Hussein Tarek
            </Typography>
            <Typography
              component="span"
              sx={{ fontSize: "26px", color: "#45505b" }}
            >
              I'm
            </Typography>
            <Typography component="span">
              <Box
                style={{
                  position: "absolute",
                  top: "57px",
                  left: "40px",
                  color: "#0563bb",
                  letterSpacing: "1px",
                  fontSize: "26px",
                }}
              >
                <Typewriter
                  options={{
                    strings: ["Designer", "Developer", "Freelancer"],
                    pauseFor: 1000,
                    autoStart: true,
                    loop: true,
                  }}
                  // style={{ display: "inline" }}
                />
              </Box>
              <Box mt="30px" sx={{ color: "#0563bb" }}>
                <a style={{ marginRight: "20px", color: "#45505b" }} href="">
                  <TwitterIcon />
                </a>
                <a style={style} href="">
                  <FacebookOutlinedIcon />
                </a>
                <a style={style} href="">
                  <LinkedInIcon />
                </a>
                <a style={style} href="">
                  <InstagramIcon />
                </a>
                <a style={style} href="">
                  <YouTubeIcon />
                </a>
              </Box>
            </Typography>
          </Info>
        </Container>
      </MyHero>
    </>
  );
};

export default Hero;
