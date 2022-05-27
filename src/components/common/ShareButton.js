import React from "react";
import { FiShare2 as _FiShare2 } from "react-icons/fi";
import styled from "styled-components";
import ShareMenu from "./ShareMenu";

const FiShare2 = styled(_FiShare2)`
  cursor: pointer;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const ShareButton = ({ style, size }) => {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <FiShare2 style={style} onClick={toggleOpen} size={size} />
      <ShareMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default ShareButton;
