import React from "react";
import styled from "styled-components";

const MyDiv = styled.div`
  margin-left: 100px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
const MyContainer = (props) => {
  return <MyDiv>props.children</MyDiv>;
};

export default MyContainer;
