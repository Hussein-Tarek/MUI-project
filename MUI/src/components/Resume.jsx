import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

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

const ResumeItem = styled("div")(() => ({
  padding: "0 0 20px 20px",
  borderLeft: "2px solid #0563bb",
  marginTop: "-5px",
  "&::before": {
    content: '""',
    display: "block",
    position: "relative",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: "#fff",
    border: "2px solid #0563bb",
    left: "-29px",
  },
}));
const Resume = () => {
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
                RESUME
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
          <Grid container>
            <Grid item lg={6} sm={12} background="#000000">
              <Typography
                component="h3"
                fontWeight="700"
                fontSize="26px"
                color="secondary"
                marginTop="20px"
                marginBottom="20px"
              >
                Summary
              </Typography>
              <Box>
                <ResumeItem>
                  <Typography
                    component="h4"
                    lineHeight="18px"
                    fontSize="18px"
                    fontWeight="600"
                    position="relative"
                    top="-15px"
                    color="primary"
                  >
                    HUSSEIN TAREK
                  </Typography>
                  <Typography component="em" color="secondary">
                    Innovative and deadline-driven Graphic Designer with 3+
                    years of experience designing and developing user-centered
                    digital/print marketing material from initial concept to
                    final, polished deliverable.
                  </Typography>
                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </ResumeItem>
                <Typography
                  component="h3"
                  fontWeight="700"
                  fontSize="26px"
                  color="secondary"
                  marginTop="20px"
                  marginBottom="20px"
                >
                  Education
                </Typography>
                <ResumeItem>
                  <Typography
                    component="h4"
                    lineHeight="18px"
                    fontSize="18px"
                    fontWeight="600"
                    position="relative"
                    top="-15px"
                    color="primary"
                  >
                    WEB & UI DEVELOPMENT
                  </Typography>
                  <Typography
                    component="h5"
                    sx={{
                      background: "#F7F8F9",
                      width: "100px",
                      paddingX: "10px",
                      paddingY: "5px",
                    }}
                  >
                    2022-2023
                  </Typography>
                  <Typography component="em" color="secondary">
                    Information Technology Institute (ITI)
                  </Typography>
                  <Typography component="p" color="secondary">
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit. Ea vero voluptatum qui ut
                    dignissimos deleniti nerada porti sand markend
                  </Typography>
                </ResumeItem>
                <ResumeItem>
                  <Typography
                    component="h4"
                    lineHeight="18px"
                    fontSize="18px"
                    fontWeight="600"
                    position="relative"
                    top="-15px"
                    color="primary"
                  >
                    BACHELOR OF PETROLEUM ENGINEERING
                  </Typography>
                  <Typography
                    component="h5"
                    sx={{
                      background: "#F7F8F9",
                      width: "100px",
                      paddingX: "10px",
                      paddingY: "5px",
                    }}
                  >
                    2015-2020
                  </Typography>
                  <Typography component="em" color="secondary">
                    Faculty Of Petroleum and Mining Engineering
                  </Typography>
                  <Typography component="p" color="secondary">
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto
                    quae reiciendis et quis Eius vel ratione eius unde vitae
                    rerum voluptates asperiores voluptatem Earum molestiae
                    consequatur neque etlon sader mart dila
                  </Typography>
                </ResumeItem>
              </Box>
            </Grid>
            <Grid item lg={6} sm={12}>
              <Typography
                component="h3"
                fontWeight="700"
                fontSize="26px"
                color="secondary"
                marginTop="20px"
                marginBottom="20px"
              >
                Professional Experience
              </Typography>
              <Box>
                <ResumeItem>
                  <Typography
                    component="h4"
                    lineHeight="18px"
                    fontSize="18px"
                    fontWeight="600"
                    position="relative"
                    top="-15px"
                    color="primary"
                  >
                    SENIOR GRAPHIC DESIGN SPECIALIST
                  </Typography>
                  <Typography
                    component="h5"
                    sx={{
                      background: "#F7F8F9",
                      width: "100px",
                      paddingX: "10px",
                      paddingY: "5px",
                    }}
                  >
                    2022-2023
                  </Typography>
                  <Typography component="em" color="secondary">
                    Experion, New York, NY
                  </Typography>
                  <ul>
                    <li>
                      Lead in the design, development, and implementation of the
                      graphic, layout, and production communication materials
                    </li>
                    <li>
                      Delegate tasks to the 7 members of the design team and
                      provide counsel on all aspects of the project.
                    </li>
                    <li>
                      Supervise the assessment of all graphic materials in order
                      to ensure quality and accuracy of the design
                    </li>
                    <li>
                      Oversee the efficient use of production project budgets
                      ranging from $2,000 - $25,000
                    </li>
                  </ul>
                </ResumeItem>
                <ResumeItem>
                  <Typography
                    component="h4"
                    lineHeight="18px"
                    fontSize="18px"
                    fontWeight="600"
                    position="relative"
                    top="-15px"
                    color="primary"
                  >
                    GRAPHIC DESIGN SPECIALIST
                  </Typography>
                  <Typography
                    component="h5"
                    sx={{
                      background: "#F7F8F9",
                      width: "100px",
                      paddingX: "10px",
                      paddingY: "5px",
                    }}
                  >
                    2017-2018
                  </Typography>
                  <Typography component="em" color="secondary">
                    Stepping Stone Advertising, New York, NY
                  </Typography>
                  <ul>
                    <li>
                      Lead in the design, development, and implementation of the
                      graphic, layout, and production communication materials
                    </li>
                    <li>
                      Delegate tasks to the 7 members of the design team and
                      provide counsel on all aspects of the project.
                    </li>
                    <li>
                      Supervise the assessment of all graphic materials in order
                      to ensure quality and accuracy of the design
                    </li>
                    <li>
                      Oversee the efficient use of production project budgets
                      ranging from $2,000 - $25,000
                    </li>
                  </ul>
                </ResumeItem>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
