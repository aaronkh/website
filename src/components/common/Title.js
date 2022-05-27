import styled from "styled-components";
import { withThemeContext } from "../../context/ThemeContext";

const Container = styled.svg`
display: block;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: ${({height}) => `-${height/4}px`}
`;

const Title = ({ color, themeContext, size, children, width, style }) => {
  const _height = size || 128;
  const _width = width || children.length * _height * 0.4;
  return (
    <Container
      viewBox={`0 0 ${_width} ${_height}`}
      height={_height}
      width={_width}
      style={style}
    >
      <text
        fill="none"
        y="50%"
        x="50%"
        textLength={_width}
        fontSize={_height * 0.7}
        textAnchor="middle"
        strokeWidth="2"
        fontWeight="bold"
        stroke={color || themeContext.primary}
        fontFamily="Poppins"
      >
        {children}
      </text>
    </Container>
  );
};
export default withThemeContext(Title);
