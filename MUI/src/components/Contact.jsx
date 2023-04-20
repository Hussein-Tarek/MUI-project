import { Box, Grid, Container, Typography, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const sxBox = {
  position: "relative",
  top: "9px",
  left: "9px",
  color: "#0563BB",
  fontSize: "25px",
  "&:hover": { color: "#fff" },
};

const sxCircle = {
  width: "44px",
  height: "44px",
  borderRadius: "100%",
  background: "#eef7ff",
  "&:hover": { background: "#0563BB" },
};
const Contact = () => {
  const MyContainer = styled.div`
    margin-left: 100px;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  `;

  const Title = styled.div`
    text-align: center;
    padding-bottom: 30px;
  `;

  const Head = styled.div`
    margin-bottom: 20px;
    padding-bottom: 20px;
    font-size: 32px;
    & ::before {
      content: '';
      position: relative;
      display: block;
      width: 120px;
      height: 1px;
      background: #ddd;
      bottom: 1px;
      left: calc(50% - 60px);
      top: 70px;
    };
    & ::after {
      content: '';
      position: relative;
      display: block;
      width: 40px;
      height: 3px;
      background: #0563bb;
      bottom: 0;
      top: 20px;
      left: calc(50% - 20px);
    },
  `;

  return (
    <>
      <Box
        sx={{
          paddingY: "60px",
        }}
      >
        <Box>
          <Title>
            <Head>
              <Typography fontSize="32px" fontWeight="bold" color="secondary">
                CONTACT
              </Typography>
            </Head>
          </Title>
        </Box>
        <Box>
          <Grid container rowSpacing={4}>
            <Grid item md={4} xs={12}>
              <Grid container>
                <Grid item>
                  <Box sx={sxCircle}>
                    <LocationOnOutlinedIcon sx={sxBox} />
                  </Box>
                </Grid>
                <Grid item sx={{ position: "relative", top: "-5px" }}>
                  <Typography
                    sx={{
                      padding: "0 0 0 20px",
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#45505b",
                      top: "-5px",
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    sx={{
                      padding: "0 0 0 20px",
                      marginBottom: "0",
                      fontSize: "14px",
                      color: "#728394",
                    }}
                  >
                    A108 Adam Street, New York, NY 535022
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ mt: "40px" }}>
                <Grid item>
                  <Box sx={sxCircle}>
                    <MailOutlineOutlinedIcon sx={sxBox} />
                  </Box>
                </Grid>
                <Grid item sx={{ position: "relative", top: "-5px" }}>
                  <Typography
                    sx={{
                      padding: "0 0 0 20px",
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#45505b",
                      top: "-5px",
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    sx={{
                      padding: "0 0 0 20px",
                      marginBottom: "0",
                      fontSize: "14px",
                      color: "#728394",
                    }}
                  >
                    A108 Adam Street, New York, NY 535022
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ mt: "40px" }}>
                <Grid item>
                  <Box sx={sxCircle}>
                    <StayCurrentPortraitOutlinedIcon sx={sxBox} />
                  </Box>
                </Grid>
                <Grid item sx={{ position: "relative", top: "-5px" }}>
                  <Typography
                    sx={{
                      padding: "0 0 0 20px",
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#45505b",
                      top: "-5px",
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    sx={{
                      padding: "0 0 0 20px",
                      marginBottom: "0",
                      fontSize: "14px",
                      color: "#728394",
                    }}
                  >
                    A108 Adam Street, New York, NY 535022
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={8} xs={12}>
              <form style={{ margin: "auto" }}>
                <Box>
                  <Grid container columnSpacing={2} rowSpacing={2} pb="8px">
                    <Grid item lg={6} xs={12}>
                      <TextField
                        id="outlined-basic"
                        label="Your Name"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <TextField
                        id="outlined-basic"
                        label="Your Email"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Box paddingBottom="8px" mt="1rem">
                    <TextField
                      id="outlined-basic"
                      label="Your Email"
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </Box>
                  <Box paddingBottom="8px" mt="1rem">
                    <TextField
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        borderRadius: "20px",
                        margin: "auto",
                        padding: "10px 35px",
                        left: "23vw",
                      }}
                      variant="contained"
                      size="medium"
                    >
                      Send Message
                    </Button>
                  </Box>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
