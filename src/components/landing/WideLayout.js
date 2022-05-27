import React from "react";
import styled from "styled-components";
import { withThemeContext } from "../../context/ThemeContext";
import ShareButton from "../common/ShareButton";
import ThemeSwitcher from "../common/ThemeSwitcher";
import Description from "./Description";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Links from "./Links";
import Socials from "./Socials";

const Container = styled.div`
  display: grid;
  grid-template-columns: 33% 34% 33%;
  grid-template-rows: 33% 34% 33%;
  height: 100%;
  overflow: hidden;
`;

const firstNameContainerStyle = {
  gridColumnStart: 1,
  gridColumnEnd: 4,
  gridRowStart: 1,
  gridRowEnd: 3,
};

const lastNameContainerStyle = {
  ...firstNameContainerStyle,
  gridRowStart: 2,
  gridRowEnd: 4,
  justifyContent: "end",
  alignItems: "end",
};

const descriptionStyle = {
  gridColumnStart: 2,
  gridColumnEnd: 2,
  gridRowStart: 2,
  zIndex: 13,
};

const linksStyle = {
  gridColumnStart: 1,
  gridColumnEnd: 2,
  gridRowStart: 3,
  gridRowEnd: 4,
  zIndex: 13,
  textAlign: "right",
  justifySelf: "center",
  height: "60%",
  marginRight: "5%",
  marginTop: "-10%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
};

const socialsStyle = {
  gridColumnStart: 2,
  gridColumnEnd: 4,
  gridRowStart: 1,
  width: "60%",
  textAlign: "right",
  justifySelf: "end",
  marginTop: "5%",
  marginRight: "2rem",
};

const switcherContainerStyle = {
  gridRowStart: 3, 
  gridColumnStart: 1,
  marginBottom: 16,
  alignSelf: 'end',
  fontSize: 32,
  display: "flex",
};

const switcherItemStyle = {
  marginLeft: 16,
  marginRight: 16,
};

const Layout = () => (
  <Container>
    <FirstName style={firstNameContainerStyle} />
    <LastName style={lastNameContainerStyle} />
    <Description style={descriptionStyle} />
    <Links style={linksStyle} />
    <Socials style={socialsStyle} />
    <div style={switcherContainerStyle}>
      <ThemeSwitcher style={switcherItemStyle} />
      <ShareButton style={switcherItemStyle} />
    </div>
  </Container>
);

export default withThemeContext(Layout);
