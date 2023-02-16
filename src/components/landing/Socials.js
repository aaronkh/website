import {
  FiGithub,
  FiMail,
  // FiInstagram,
  FiPhone,
  FiLinkedin,
} from "react-icons/fi";
import styled from "styled-components";

const linkData = [
  {
    name: "huang.aaron03@",
    icon: FiMail,
    to: "mailto:huang.aaron03@gmail.com",
  },
  {
    name: "+1(415)812-6317",
    icon: FiPhone,
    to: "tel:415-812-6317",
  },
  {
    name: "aaronkh",
    icon: FiGithub,
    to: "https://www.github.com/aaronkh",
  },
  {
    name: "aaronkh",
    icon: FiLinkedin,
    to: "https://www.linkedin.com/in/aaronkh",
  },
  // {
  //   name: "ig.aahuang",
  //   icon: FiInstagram,
  //   to: "https://www.instagram.com/@ig.aahuang",
  // },
];

const LinkContainer = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 2.2rem;
  display: inline-block;
  margin-left: 16px;
  margin-right: 16px;
  white-space: nowrap;
  font-weight: bold;

  svg {
    margin-bottom: -2px;
    margin-right: 8px;
  }
  
  a {
    text-decoration: none
  }
`;

const Link = ({ name, icon, to, style }) => (
  <LinkContainer style={style}>
    <a href={to}>
      {icon()}
    </a>
  </LinkContainer>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: inherit
`;

const Socials = ({ style, itemStyle }) => (
  <Container style={style}>
    {linkData.map((v) => (
      <Link key={v.to} {...v} style={itemStyle} />
    ))}
  </Container>
);

export default Socials;
