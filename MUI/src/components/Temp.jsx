import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const MyContainer = styled("div")(() => ({
  marginLeft: "100px",
}));

const Title = styled("div")((theme) => ({
  textAlign: "center",
  paddingBottom: "30px",
}));
const Head = styled("div")(() => ({
  marginBottom: "20px",
  paddingBottom: "20px",
  fontSize: "32px",
  "&::before": {
    content: '""',
    position: "relative",
    display: "block",
    width: "120px",
    height: "1px",
    background: "#ddd",
    bottom: "1px",
    left: `calc(50% - 60px)`,
    top: "70px",
  },
  "&::after": {
    content: '""',
    position: "relative",
    display: "block",
    width: "40px",
    height: "3px",
    background: "#0563bb",
    bottom: 0,
    top: "20px",
    left: `calc(50% - 20px)`,
  },
}));

const Temp = () => {
  return (
    <>
      <Box
        sx={{
          paddingY: "60px",
        }}
      >
        <MyContainer>
          <Container
            maxWidth="false"
            sx={{
              maxWidth: "1320px",
              marginX: "49.6px",
            }}
          >
            <Box>
              <Title>
                <Head>
                  <Typography
                    fontSize="32px"
                    fontWeight="bold"
                    color="secondary"
                  >
                    SKILLS
                  </Typography>
                </Head>
                <Typography component="p">
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </Typography>
              </Title>
            </Box>
          </Container>
        </MyContainer>
      </Box>
    </>
  );
};

export default Temp;
