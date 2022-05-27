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
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const SwitcherContainer = styled.div`
  margin-top: 12px;
  display: flex;
`;

const InnerContainer = styled.div`
  flex-grow: 1;
  position: relative
`;

const lastNameContainerStyle = {
  order: 99,
};

const descriptionStyle = {
  zIndex: 13,
  marginRight: 12,
  marginLeft: 12,
};

const linksStyle = {
  zIndex: 13,
  textAlign: "right",
  position: 'absolute',
  right: 16,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
  lineHeight: '1.6rem'
};

const socialsStyle = {
  justifySelf: "end",
  marginRight: "2rem",
  opacity: 0.6,
};

const socialItemStyle = {
  display: "block",
};

const switcherItemStyle = {
  marginLeft: 16,
};

const Layout = () => (
  <Container>
    <FirstName />
    <LastName style={lastNameContainerStyle} />
    <InnerContainer>
      <Description style={descriptionStyle} />
      <Socials style={socialsStyle} itemStyle={socialItemStyle} />
      <SwitcherContainer>
        <ThemeSwitcher style={switcherItemStyle} size={32} />
        <ShareButton style={switcherItemStyle} size={32} />
      </SwitcherContainer>
      <Links style={linksStyle} />
    </InnerContainer>
  </Container>
);

export default withThemeContext(Layout);
