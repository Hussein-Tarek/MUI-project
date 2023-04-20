import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import profile from "../assets/img/profile-img.jpg";

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

const About = () => {
  return (
    <>
      <Box
        sx={{
          m: "auto",
          paddingY: "60px",
        }}
      >
        <Box>
          <Title>
            <Head>
              <Typography fontSize="32px" fontWeight="bold" color="secondary">
                ABOUT
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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container direction="row" columnSpacing="24px">
            <Grid item md={4} sm={12}>
              <img src={profile} width="100%" height="auto" />
            </Grid>
            <Grid item md={8} sm={12}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: "26px",
                  color: "#728394",
                  mb: "8px",
                }}
              >
                UI/UX Designer & Web Developer.
              </Typography>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Grid
                item
                container
                direction="row"
                columnSpacing="12px"
                rowSpacing="12px"
              >
                <Grid item md={6} sm={12}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ paddingX: 0 }}>
                        <ListItemIcon
                          sx={{
                            minWidth: "5px",
                          }}
                        >
                          <ArrowForwardIosSharpIcon
                            fontSize="small"
                            color="primary"
                          />
                        </ListItemIcon>
                        <strong style={{ marginRight: "10px" }}>
                          BirthDay:
                        </strong>
                        <span style={{ color: "#45505b" }}> 18 May 1997</span>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ paddingX: 0 }}>
                        <ListItemIcon
                          sx={{
                            minWidth: "5px",
                          }}
                        >
                          <ArrowForwardIosSharpIcon
                            fontSize="small"
                            color="primary"
                          />
                        </ListItemIcon>
                        <strong style={{ marginRight: "10px" }}>
                          Website:
                        </strong>
                        <span style={{ color: "#45505b" }}>
                          www.example.com
                        </span>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ paddingX: 0 }}>
                        <ListItemIcon
                          sx={{
                            minWidth: "5px",
                          }}
                        >
                          <ArrowForwardIosSharpIcon
                            fontSize="small"
                            color="primary"
                          />
                        </ListItemIcon>
                        <strong style={{ marginRight: "10px" }}>Phone:</strong>
                        <span style={{ color: "#45505b" }}>+201123055681</span>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ paddingX: 0 }}>
                        <ListItemIcon
                          sx={{
                            minWidth: "5px",
                          }}
                        >
                          <ArrowForwardIosSharpIcon
                            fontSize="small"
                            color="primary"
                          />
                        </ListItemIcon>
                        <strong style={{ marginRight: "10px" }}>City:</strong>
                        <span style={{ color: "#45505b" }}>Cairo, Egypt</span>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item md={6} sm={12}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ paddingX: 0 }}>
                        <ListItemIcon
                          sx={{
                            minWidth: "5px",
                          }}
                        >
                          <ArrowForwardIosSharpIcon
                            fontSize="small"
                            color="primary"
                          />
                        </ListItemIcon>

                        <strong style={{ marginRight: "10px" }}>Age:</strong>
                        <span style={{ color: "#45505b" }}> 26 </span>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ paddingX: 0 }}>
                        <ListItemIcon
                          sx={{
                            minWidth: "5px",
                          }}
                        >
                          <ArrowForwardIosSharpIcon
                            fontSize="small"
                            color="primary"
                          />
                        </ListItemIcon>
                        <strong style={{ marginRight: "10px" }}>Degree:</strong>
                        <span style={{ color: "#45505b" }}> Bachelor </span>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ paddingX: 0 }}>
                        <ListItemIcon
                          sx={{
                            minWidth: "5px",
                          }}
                        >
                          <ArrowForwardIosSharpIcon
                            fontSize="small"
                            color="primary"
                          />
                        </ListItemIcon>
                        <strong style={{ marginRight: "10px" }}>Email:</strong>
                        <span style={{ color: "#45505b" }}>
                          htarek47@gmail.com
                        </span>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ paddingX: 0 }}>
                        <ListItemIcon
                          sx={{
                            minWidth: "5px",
                          }}
                        >
                          <ArrowForwardIosSharpIcon
                            fontSize="small"
                            color="primary"
                          />
                        </ListItemIcon>
                        <strong style={{ marginRight: "10px" }}>
                          Freelance:
                        </strong>
                        <span style={{ color: "#45505b" }}> Available </span>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Typography component="p">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default About;
