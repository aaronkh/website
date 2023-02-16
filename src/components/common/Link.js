import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { withThemeContext } from "../../context/ThemeContext";

const Internal = styled(RouterLink)`
  position: relative;
  outline: 0;
  color: inherit;
  text-decoration: none;
  border-bottom: 2px dashed black;
  border-bottom-color: ${({ underline }) => underline ? 'unset' : 'transparent'};

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 101%;
    height: 33%;
    bottom: 10%;
    opacity: 0.6;
    background-color: ${props => props.alwaysHighlight ? props.highlight : 'transparent'};
  }
  &:hover::before {
    visibility: inherit;
    background-color: ${(props) => props.highlight};
  }
`;

const Link = ({ to, highlight, alwaysHighlight, themeContext, children, className, underline }) => {
  const props = {
    underline,
    children,
    to,
    className,
    highlight: highlight || alwaysHighlight ? themeContext.primary : "transparent",
    alwaysHighlight: alwaysHighlight || false
  };
  return Internal.render(props);
};

export default withThemeContext(Link);
