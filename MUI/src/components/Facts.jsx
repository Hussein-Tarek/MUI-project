import React from "react";
import CountUp from "react-countup";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ArticleIcon from "@mui/icons-material/Article";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

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

const Icon = styled.div`
  position: relative;
  top: 12px;
  margin-bottom: 20px;
`;
const Facts = () => {
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
                FACTS
              </Typography>
            </Head>
            <Typography component="p">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Typography>
          </Title>
        </Box>
        <Grid
          container
          direction="row"
          columnSpacing="24px"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item lg={3} md={6} xs={12}>
            <Container
              sx={{
                margin: "auto",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  margin: "auto",
                  marginBottom: "10px",
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#0563BB",
                  borderRadius: "100%",
                }}
              >
                <Icon>
                  <SentimentSatisfiedAltRoundedIcon
                    color="white"
                    fontSize="medium"
                  />
                </Icon>
              </Box>
              <Typography
                component="span"
                sx={{
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                <CountUp start={0} end={232} delay={4}></CountUp>
              </Typography>
              <Typography component="p">Happy Clients</Typography>
            </Container>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Container
              sx={{
                margin: "auto",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  margin: "auto",
                  marginBottom: "10px",
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#0563BB",
                  borderRadius: "100%",
                }}
              >
                <Icon>
                  <ArticleIcon color="white" fontSize="medium" />
                </Icon>
              </Box>
              <Typography
                component="span"
                sx={{
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                <CountUp start={0} end={521} delay={4}></CountUp>
              </Typography>
              <Typography component="p">Projects</Typography>
            </Container>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Container
              sx={{
                margin: "auto",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  margin: "auto",
                  marginBottom: "10px",
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#0563BB",
                  borderRadius: "100%",
                }}
              >
                <Icon>
                  <HeadsetMicIcon color="white" fontSize="medium" />
                </Icon>
              </Box>
              <Typography
                component="span"
                sx={{
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                <CountUp start={0} end={1463} delay={4}></CountUp>
              </Typography>
              <Typography component="p">Hours Of Support</Typography>
            </Container>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Container
              sx={{
                margin: "auto",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  margin: "auto",
                  marginBottom: "10px",
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#0563BB",
                  borderRadius: "100%",
                }}
              >
                <Icon>
                  <MilitaryTechIcon color="white" fontSize="medium" />
                </Icon>
              </Box>
              <Typography
                component="span"
                sx={{
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                <CountUp start={0} end={25} delay={4}></CountUp>
              </Typography>
              <Typography component="p">Awards</Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Facts;
