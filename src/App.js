import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import styled from "styled-components";
import { withThemeContext } from "./context/ThemeContext";
import Resume from "./screens/Resume";

const Base = styled.div`
  background: ${(props) => props.background};
  transition: 0.25s;
  width: inherit;
  flex: 1;
  min-height: 100%;
  color: ${(props) => props.text};
`;

function App(props) {
  return (
    <Base {...props.themeContext}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} exact/>
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </Base>
  );
}

export default withThemeContext(App);
