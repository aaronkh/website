import { useState, useEffect } from "react";
import styled from "styled-components";
import { withThemeContext } from "../../context/ThemeContext";

const Container = styled.div`
  display: grid;
  > * {
    grid-column: 1;
    grid-row: 1;
  }
`;

// Keep track of correct size
// Render titles

const GradientTitle = ({ style, color, down, children, themeContext }) => {
  const [size, setSize] = useState({ height: 0, width: 0 });
  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
    const fn = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const _height = Math.min(size.height / 2.3, size.width * 0.3);
  const _width = Math.min(size.width, _height * children.length * 0.66);

  const styles = [];
  for (let i = 0; i < 4; ++i) {
    const newStyle = {};
    if (down) {
      newStyle.transform = `translateY(${-10 + i * 5}%)`;
      newStyle.opacity = Math.pow(0.5, i);
    } else {
      newStyle.transform = `translateY(${-5 + i * 5}%)`;
      newStyle.opacity =
        Math.log(Math.max(i - 0.6, 0.4)) / 2.3 + Math.log(4) / 2.3;
    }
    styles.push(Object.assign({}, newStyle));
  }

  return (
    <Container style={style}>
      {styles.map((v, i) => (
        <svg
          viewBox={`0 0 ${_width} ${_height}`}
          height={_height}
          width={_width}
          style={v}
          key={i}
        >
          <text
            fill="none"
            x="50%"
            textLength={_width}
            fontSize={_height}
            textAnchor="middle"
            dominantBaseline="hanging"
            strokeWidth="3"
            fontWeight="bold"
            stroke={color || themeContext.primary}
            fontFamily="Poppins"
          >
            {children}
          </text>
        </svg>
      ))}
    </Container>
  );
};

export default withThemeContext(GradientTitle);
