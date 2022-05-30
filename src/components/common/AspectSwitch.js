import React from "react";

function handleResize(setRatio) {
  setRatio((window.innerHeight - window.innerWidth) / window.innerHeight);
  return () => handleResize(setRatio);
}

const AspectSwitch = ({ tall, wide }) => {
  const [ratio, setRatio] = React.useState(0);
  React.useEffect(() => {
    const fn = handleResize(setRatio);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return ratio > 0.25336 ? tall : wide;
};

export default AspectSwitch;
