import React from "react";
import AspectSwitch from "../components/common/AspectSwitch";
import SetTitle from "../components/common/SetTitle";
import TallLayout from "../components/landing/TallLayout";
import WideLayout from "../components/landing/WideLayout";

const Landing = () => (
  <>
    <SetTitle title="Aaron Huang" />
    <AspectSwitch
      className="screen"
      tall={<TallLayout />}
      wide={<WideLayout />}
    />
  </>
);

export default Landing;
