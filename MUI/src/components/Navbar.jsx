import ScrollSpy from "react-scrollspy-navigation";

import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";

import styles from "../assets/css/navbar.module.css";

const MyBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 15px;
  z-index: 5;
  // background-color: gray;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <>
      <MyBox className={styles.navMenu}>
        <Box
          sx={{
            padding: "15px",
            mt: "50px",
          }}
        >
          <ul className={styles.nav}>
            <li>
              <a href="#hero">
                <HomeOutlinedIcon />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <PersonOutlineOutlinedIcon />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume">
                <InsertDriveFileOutlinedIcon />
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <GradingOutlinedIcon />
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services">
                <DisplaySettingsOutlinedIcon />
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <LocalPostOfficeOutlinedIcon />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </Box>
      </MyBox>
    </>
  );
};

export default Navbar;

// import React from "react";
// import Nav from "./Nav";
// import styled from "styled-components";

// const MyBox = styled.div`
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   padding: 15px;
//   z-index: 5;
//   background-color: gray;
//   @media (max-width: 768px) {
//     display: none;
//   }
// `

// const Navbar = () => {
//   return (
//     <>
//       <MyBox>
//         <Nav />
//       </MyBox>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import {
//   AppBar,
//   Box,
//   Button,
//   Container,
//   Toolbar,
//   Typography,
// } from "@mui/material";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   window.addEventListener("scroll", handleScroll);
//   return (
//     <>
//       <Container>
//         <AppBar
//           //   sx={{ bgcolor: "white", color: "black" }}
//           //   position="sticky"
//           sx={{
//             bgcolor: isScrolled ? "white" : "transparent",
//             color: isScrolled ? "black" : "white",
//             zIndex: "100",
//             boxShadow: "none",
//           }}
//         >
//           <Toolbar sx={{ zIndex: "1000" }}>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Portfolio{" "}
//             </Typography>
//             <Button color="inherit">Home</Button>
//             <Button color="inherit">About</Button>
//             <Button color="inherit">Services</Button>
//             <Button color="inherit">Portfolio</Button>
//             <Button color="inherit">Contact</Button>
//           </Toolbar>
//         </AppBar>
//       </Container>
//     </>
//   );
// };

// export default Navbar;
