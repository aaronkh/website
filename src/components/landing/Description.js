import React from "react";
import styled from "styled-components";
import { Code, H2 } from "../common/Text";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
`;

const Description = ({ style }) => (
  <Container style={style}>
    <Code>
      <H2>{Date.now() > 1661840623 ? "Incoming" : "Current"} SWE @ Google Nest.</H2>
      <H2>CS @ UC Berkeley c/o 2022.</H2>
      <H2>Probably working with IoT, ML, and/or music theory.</H2>
      <H2>Based in the SF Bay Area.</H2>
    </Code>
  </Container>
);

export default Description;
