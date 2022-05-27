import Link from "../common/Link";
import styled from "styled-components";
import { Code } from "../common/Text";

const Container = styled.div``;

const LinkText = styled(Code)`
  font-weight: bold;
  font-size: 1.5rem;
`;

const linkData = [
  { name: "Notes", to: "/notes", show: true },
  { name: "About", to: "/about", show: true },
  { name: "Resume", to: "/resume", show: true },
  { name: "Projects", to: "/projects", show: true },
];

const Links = ({ style }) => (
  <Container style={style}>
    {linkData.map(
      (v) =>
        v.show && (
          <Link to={v.to} key={v.name} highlight>
            <LinkText> {v.name} </LinkText>
          </Link>
        )
    )}
  </Container>
);

export default Links;
