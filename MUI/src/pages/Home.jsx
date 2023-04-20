import "animate.css/animate.min.css";
import React from "react";

import Box from "@mui/material/Box";
import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Facts from "../components/Facts";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import MyCard from "../components/MyCard";
import Services from "../components/Services";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Contact from "../components/Contact";
// import LiinearWithValueLabel from "../components/Test";

import styled from "styled-components";
import Footer from "../components/Footer";

const MyContainer = styled.div`
  margin-left: 131px;
  margin-right: 53px;
  padding-left: 49.6px;
  padding-right: 10px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0px;
    padding-left: 10px;
    padding-right: 5px;
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <MyContainer>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <div id="about">
            <About />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <div id="facts">
            <Facts />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <div id="skills">
            <Skills />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <div id="resume">
            <Resume />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <div id="portfolio">
            <Portfolio />
          </div>
        </AnimationOnScroll>

        {/* <MyCard /> */}
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <div id="services">
            <Services />
          </div>
        </AnimationOnScroll>
        <div id="contact">
          <Contact />
        </div>
      </MyContainer>
      <Footer />
    </>
  );
};

export default Home;
