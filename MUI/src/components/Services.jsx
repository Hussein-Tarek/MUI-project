import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import MyContainer from "./MyContainer";
import styled from "styled-components";

import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import LayersIcon from "@mui/icons-material/Layers";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CastleOutlinedIcon from "@mui/icons-material/CastleOutlined";

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

const sxBox = {
  position: "relative",
  top: "-38px",
  left: "-64px",
  color: "blue",
  "&:hover": { color: "red" },
};
// const sxBox2 ={
//   "&:hover":{
//     "."
//   }
// }
const MyBox = styled.div`
background-color:yellow;
&:hover: {
  .path: { fill: blue };
  .ball: { color:black };
  transition: all 5s ease;
},
`;
const Services = () => {
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
                SERVICES
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
          <Grid container spacing={4}>
            <Grid item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: "70px 20px 80px 20px",
                  transition: "all ease-in-out 0.3s",
                  background: "#fff",
                  boxShadow: " 0px 5px 90px 0px rgba(110, 123, 131, 0.05)",
                }}
              >
                {/* <Box
                  sx={{
                    "&:hover": {
                      ".path": { fill: "blue" },
                      ".ball": { color: "black" },
                      transition: "all 5s ease",
                    },
                  }}
                > */}
                <MyBox>
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="path"
                      stroke="none"
                      stroke-width="0"
                      fill="red"
                      // fill="#f5f5f5"
                      d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                    ></path>
                  </svg>
                  <SportsBaseballIcon
                    className="ball"
                    sx={{
                      fontSize: "40px",
                      position: "relative",
                      top: "-30px",
                      left: "-70px",
                      color: "blue",
                      // "&:hover": { color: "red" },
                    }}
                  />
                </MyBox>
                {/* </Box> */}
                <Typography variant="h4">Lorem Ipsum</Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, ducimus!
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: "70px 20px 80px 20px",
                  transition: "all ease-in-out 0.3s",
                  background: "#fff",
                  boxShadow: " 0px 5px 90px 0px rgba(110, 123, 131, 0.05)",
                }}
              >
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    stroke="none"
                    stroke-width="0"
                    fill="red"
                    // fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  ></path>
                </svg>
                <DescriptionOutlinedIcon
                  sx={{
                    fontSize: "40px",
                    position: "relative",
                    top: "-30px",
                    left: "-70px",
                    color: "blue",
                    "&:hover": { color: "red" },
                  }}
                />
                <Typography variant="h4">Lorem Ipsum</Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, ducimus!
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: "70px 20px 80px 20px",
                  transition: "all ease-in-out 0.3s",
                  background: "#fff",
                  boxShadow: " 0px 5px 90px 0px rgba(110, 123, 131, 0.05)",
                }}
              >
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    stroke="none"
                    stroke-width="0"
                    fill="red"
                    // fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  ></path>
                </svg>
                <SpeedOutlinedIcon
                  sx={{
                    fontSize: "40px",
                    position: "relative",
                    top: "-30px",
                    left: "-70px",
                    color: "blue",
                    "&:hover": { color: "red" },
                  }}
                />
                <Typography variant="h4">Lorem Ipsum</Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, ducimus!
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: "70px 20px 80px 20px",
                  transition: "all ease-in-out 0.3s",
                  background: "#fff",
                  boxShadow: " 0px 5px 90px 0px rgba(110, 123, 131, 0.05)",
                }}
              >
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    stroke="none"
                    stroke-width="0"
                    fill="red"
                    // fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  ></path>
                </svg>
                <LayersIcon
                  sx={{
                    fontSize: "40px",
                    position: "relative",
                    top: "-30px",
                    left: "-70px",
                    color: "blue",
                    "&:hover": { color: "red" },
                  }}
                />
                <Typography variant="h4">Lorem Ipsum</Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, ducimus!
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: "70px 20px 80px 20px",
                  transition: "all ease-in-out 0.3s",
                  background: "#fff",
                  boxShadow: " 0px 5px 90px 0px rgba(110, 123, 131, 0.05)",
                }}
              >
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    stroke="none"
                    stroke-width="0"
                    fill="red"
                    // fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  ></path>
                </svg>
                <OndemandVideoIcon
                  sx={{
                    fontSize: "40px",
                    position: "relative",
                    top: "-30px",
                    left: "-70px",
                    color: "blue",
                    "&:hover": { color: "red" },
                  }}
                />
                <Typography variant="h4">Lorem Ipsum</Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, ducimus!
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: "70px 20px 80px 20px",
                  transition: "all ease-in-out 0.3s",
                  background: "#fff",
                  boxShadow: " 0px 5px 90px 0px rgba(110, 123, 131, 0.05)",
                }}
              >
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    stroke="none"
                    stroke-width="0"
                    fill="red"
                    // fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  ></path>
                </svg>
                <CastleOutlinedIcon
                  sx={{
                    fontSize: "40px",
                    position: "relative",
                    top: "-30px",
                    left: "-70px",
                    color: "blue",
                    "&:hover": { color: "red" },
                  }}
                />
                <Typography variant="h4">Lorem Ipsum</Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, ducimus!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Services;
