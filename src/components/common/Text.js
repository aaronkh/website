import styled from "styled-components";
import { withThemeContext } from "../../context/ThemeContext";

const H1 = styled.h1`
  font-size: 2.2rem;
  line-height: 3rem;
`;

const H2 = styled.h2`
  font-size: 1.6rem;
  line-height: 40px;
  margin-bottom: 8px;
`;

const H3 = styled.h3`
  font-size: 1.3rem;
  line-height: 1.4rem;
`;

const H4 = styled.h4``;

const P = styled.p`
  line-height: 1.8rem;
  font-size: 1.1rem;
  word-spacing: 0.05rem;
  margin-top: 0.75rem;
`;

const Code = styled.span`
  font-family: "Roboto Mono", monospace;
`;
const CodeBlock = styled.div`
  font-family: "Roboto Mono", monospace;
`;

const Hint = withThemeContext(styled.span`
  color: ${(props) => props.themeContext.textHint};
`);
const Disabled = withThemeContext(styled.span`
  color: ${(props) => props.themeContext.disabled};
`);
const Error = withThemeContext(styled.span`
  color: ${(props) => props.themeContext.error};
`);
const Warn = withThemeContext(styled.span`
  color: ${(props) => props.themeContext.warn};
`);

export { H1, H2, H3, H4, P, Hint, Disabled, Error, Warn, Code, CodeBlock };
