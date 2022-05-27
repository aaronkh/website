import React from "react";
import { withThemeContext } from "../../context/ThemeContext";
import GradientTitle from "./GradientTitle";

const LastName = ({ style, themeContext }) => (
  <GradientTitle style={style} color={themeContext.secondary}>
    Huang
  </GradientTitle>
);

export default withThemeContext(LastName);
