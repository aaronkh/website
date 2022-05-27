import { FiSun as _FiSun, FiMoon as _FiMoon } from "react-icons/fi";
import { withThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";

const FiSun = styled(_FiSun)`
  cursor: pointer;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;
const FiMoon = styled(_FiMoon)`
  cursor: pointer;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const ThemeSwitcher = ({ themeContext, style, size }) =>
  themeContext.dark ? (
    <FiSun onClick={themeContext.toggleDarkMode} style={style} size={size} />
  ) : (
    <FiMoon onClick={themeContext.toggleDarkMode} style={style} size={size} />
  );

export default withThemeContext(ThemeSwitcher);
