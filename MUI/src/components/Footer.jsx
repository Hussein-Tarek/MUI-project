import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f7f8f9",
          color: "#45505b",
          textAlign: "center",
          pt: "10px",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            fontSize="36px"
            fontWeight="700"
            sx={{ position: "relative", m: "0 0 15px 0" }}
          >
            Hussein Tarek
          </Typography>
          <Typography component="p" fontStyle="italic" sx={{ m: "0 0 40px 0" }}>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </Typography>
          <Stack
            color="#fff"
            justifyContent="center"
            direction="row"
            spacing={1}
            sx={{ m: "0 0 40px 0" }}
          >
            <Box
              sx={{
                width: "36px",
                height: "36px",
                background: "#0563bb",
                borderRadius: "100%",
                paddingTop: "6px",
              }}
            >
              <TwitterIcon />
            </Box>
            <Box
              sx={{
                width: "36px",
                height: "36px",
                background: "#0563bb",
                borderRadius: "100%",
                paddingTop: "6px",
              }}
            >
              <FacebookOutlinedIcon />
            </Box>
            <Box
              sx={{
                width: "36px",
                height: "36px",
                background: "#0563bb",
                borderRadius: "100%",
                paddingTop: "6px",
              }}
            >
              <InstagramIcon />
            </Box>
            <Box
              sx={{
                width: "36px",
                height: "36px",
                background: "#0563bb",
                borderRadius: "100%",
                paddingTop: "6px",
              }}
            >
              <LinkedInIcon />
            </Box>
            <Box
              sx={{
                width: "36px",
                height: "36px",
                background: "#0563bb",
                borderRadius: "100%",
                paddingTop: "6px",
              }}
            >
              <YouTubeIcon />
            </Box>
          </Stack>
          <Typography sx={{ m: "0 0 40px 0" }}>
            © Copyright <strong>MyResume.</strong> All Rights Reserved
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
