import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Test from "./screens/Test";
import styled from "styled-components";
import { withThemeContext } from "./context/ThemeContext";
import About from "./screens/About";

const Base = styled.div`
  background: ${(props) => props.background};
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
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </Base>
  );
}

export default withThemeContext(App);
