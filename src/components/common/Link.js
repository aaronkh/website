import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { withThemeContext } from "../../context/ThemeContext";

const External = styled.a`
  position: relative;
  z-index: 99;
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 101%;
    height: 33%;
    bottom: 10%;
    background-color: transparent;
  }
  &:hover::before {
    visibility: inherit;
    opacity: 0.6;
    background-color: ${(props) => props.highlight};
  }
`;

const Internal = styled(RouterLink)`
  position: relative;
  z-index: 99;
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 101%;
    height: 33%;
    bottom: 10%;
    background-color: transparent;
  }
  &:hover::before {
    visibility: inherit;
    opacity: 0.6;
    background-color: ${(props) => props.highlight};
  }
`;

const Link = ({ to, highlight, themeContext, children }) => {
  const stopProp = (e) => e.stopPropagation();
  const isInternal = to.startsWith(".") || to.startsWith("/");
  const props = {
    children,
    to,
    highlight: highlight ? themeContext.primary : "transparent",
  };
  if (isInternal) {
    return Internal.render(props);
  } else {
    Object.assign(props, {
      href: to,
      onClick: stopProp,
      target: "_blank",
      rel: "noopener noreferrer",
    });
    return External.render(props);
  }
};

export default withThemeContext(Link);
