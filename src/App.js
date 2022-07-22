import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Test from "./screens/Test";
import styled from "styled-components";
import { withThemeContext } from "./context/ThemeContext";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import Notes from "./screens/Notes";
import Projects from "./screens/Projects";

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
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes/*" element={<Notes />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Base>
  );
}

export default withThemeContext(App);
