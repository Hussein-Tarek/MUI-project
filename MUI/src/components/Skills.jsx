import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import styled from "@mui/material/styles/styled";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import LinearWithValueLabel from "../components/ProgressBar";

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

const Skills = () => {
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
                SKILLS
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
        <Box>
          <Grid
            container
            direction="row"
            columnSpacing="20px"
            rowSpacing="50px"
          >
            <Grid
              item
              container
              direction="column"
              lg={6}
              sm={12}
              rowSpacing="20px"
            >
              <Grid item>
                <Typography fontWeight="600" fontSize="12px" color="#45505b">
                  HTML
                </Typography>
                <ProgressBar
                  completed={100}
                  bgColor="#0563bb"
                  height="10px"
                  borderRadius="0"
                  labelAlignment="outside"
                  baseBgColor="#a0c3e5"
                  labelColor="#45505b"
                  transitionDuration="10s"
                  animateOnRender
                  maxCompleted={100}
                />
              </Grid>
              <Grid item>
                <Typography fontWeight="600" fontSize="12px" color="#45505b">
                  CSS
                </Typography>
                <ProgressBar
                  completed={90}
                  bgColor="#0563bb"
                  height="10px"
                  borderRadius="0"
                  labelAlignment="outside"
                  baseBgColor="#a0c3e5"
                  labelColor="#45505b"
                  transitionDuration="10s"
                  animateOnRender
                  maxCompleted={100}
                />
                {/* <LinearWithValueLabel value="90" skill="CSS" /> */}
              </Grid>

              <Grid item>
                <Typography fontWeight="600" fontSize="12px" color="#45505b">
                  JAVASCRIPT
                </Typography>
                <ProgressBar
                  completed={80}
                  bgColor="#0563bb"
                  height="10px"
                  borderRadius="0"
                  labelAlignment="outside"
                  baseBgColor="#a0c3e5"
                  labelColor="#45505b"
                  transitionDuration="10s"
                  animateOnRender
                  maxCompleted={100}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              rowSpacing="20px"
              direction="column"
              lg={6}
              sm={12}
            >
              <Grid item>
                <Typography fontWeight="600" fontSize="12px" color="#45505b">
                  NODE.JS
                </Typography>
                <ProgressBar
                  completed={70}
                  bgColor="#0563bb"
                  height="10px"
                  borderRadius="0"
                  labelAlignment="outside"
                  baseBgColor="#a0c3e5"
                  labelColor="#45505b"
                  transitionDuration="10s"
                  animateOnRender
                  maxCompleted={100}
                />
              </Grid>
              <Grid item>
                <Typography fontWeight="600" fontSize="12px" color="#45505b">
                  REACT JS
                </Typography>
                <ProgressBar
                  completed={80}
                  bgColor="#0563bb"
                  height="10px"
                  borderRadius="0"
                  labelAlignment="outside"
                  baseBgColor="#a0c3e5"
                  labelColor="#45505b"
                  transitionDuration="10s"
                  animateOnRender
                  maxCompleted={100}
                />
              </Grid>
              <Grid item>
                <Typography fontWeight="600" fontSize="12px" color="#45505b">
                  ANGULAR
                </Typography>
                <ProgressBar
                  completed={75}
                  bgColor="#0563bb"
                  height="10px"
                  borderRadius="0"
                  labelAlignment="outside"
                  baseBgColor="#a0c3e5"
                  labelColor="#45505b"
                  transitionDuration="10s"
                  animateOnRender
                  maxCompleted={100}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
