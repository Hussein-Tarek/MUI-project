import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import img1 from "../assets/img/portfolio/portfolio-1.jpg";
import img2 from "../assets/img/portfolio/portfolio-2.jpg";
import img3 from "../assets/img/portfolio/portfolio-3.jpg";
import img4 from "../assets/img/portfolio/portfolio-4.jpg";
import img5 from "../assets/img/portfolio/portfolio-5.jpg";
import img6 from "../assets/img/portfolio/portfolio-6.jpg";
import img7 from "../assets/img/portfolio/portfolio-7.jpg";
import img8 from "../assets/img/portfolio/portfolio-8.jpg";
import img9 from "../assets/img/portfolio/portfolio-9.jpg";
import img10 from "../assets/img/portfolio/portfolio-details-1.jpg";
import img11 from "../assets/img/portfolio/portfolio-details-2.jpg";
import img12 from "../assets/img/portfolio/portfolio-details-3.jpg";

const MyBox = styled.div`
  width: 100%;
  height: 180vh;
  margin-bottom: 100px;

  @media (max-width: 992px) {
    height: 100vh;
    // margin-bottom: 80px;
  }
  @media (max-width: 768px) {
    height: 100vh;
    // margin-bottom: 100px;
  }
  @media (max-width: 600px) {
    height: 50vh;
    // margin-bottom: 150px;
  }
`;

const itemData = [
  {
    img: `${img1}`,
    title: "img1",
  },
  {
    img: `${img2}`,
    title: "img2",
  },
  {
    img: `${img3}`,
    title: "img3",
  },
  {
    img: `${img4}`,
    title: "img4",
  },
  {
    img: `${img5}`,
    title: "img5",
  },
  {
    img: `${img6}`,
    title: "img6",
  },
  {
    img: `${img7}`,
    title: "img7",
  },
  {
    img: `${img8}`,
    title: "img8",
  },
  {
    img: `${img9}`,
    title: "img9",
  },
  {
    img: `${img10}`,
    title: "img10",
  },
  {
    img: `${img11}`,
    title: "img11",
  },
  {
    img: `${img12}`,
    title: "img12",
  },
];

const Imagelist = () => {
  return (
    // <Box sx={{ width: "100%", height: "1267px", mb: "180px" }}>
    <MyBox>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </MyBox>
  );
};

export default Imagelist;
