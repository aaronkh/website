import styled from "styled-components";
import Image from "../common/Image";

const PicContainer = styled.div`
  float: right;
  margin: 1rem;
  width: 33%;
  aspect-ratio: 1/1;
  @media (max-width: 450px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

const FaceImage = styled(Image)`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const Pic = () => (
  <PicContainer>
    <FaceImage
      src={"/pfp.jpg"}
    />
  </PicContainer>
);

export default Pic;
