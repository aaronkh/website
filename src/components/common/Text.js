import styled from "styled-components";
import { withThemeContext } from "../../context/ThemeContext";

const H1 = styled.h1``;

const H2 = styled.h2`
  line-height: 32px;
`;

const H3 = styled.h3`
  font-size: 1.4rem;
`;

const H4 = styled.h4``;

const P = styled.p`
  line-height: 1.75rem;
  font-size: 1.2rem;
  word-spacing: 0.05rem;
  margin-top: 1rem;

  & a {
    border-bottom: 2px dashed black;
    border-bottom-color: unset;
  }
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
