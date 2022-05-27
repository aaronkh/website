import React from "react";
import AspectSwitch from "../components/common/AspectSwitch";
import TallLayout from "../components/landing/TallLayout";
import WideLayout from "../components/landing/WideLayout";

const Landing = () => (
  <AspectSwitch
    className="screen"
    tall={<TallLayout />}
    wide={<WideLayout />}
  />
);

export default Landing;
