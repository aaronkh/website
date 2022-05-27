import React from "react";
import Link from "../components/common/Link";
import {
  H1,
  H2,
  H3,
  H4,
  P,
  Hint,
  Disabled,
  Error,
  Warn,
} from "../components/common/Text";
import Title from "../components/common/Title";

const Landing = () => {
  // Name
  // Links
  // Description
  // Buttons
  // Email
  return (
    <div>
      <H1>test</H1>
      <H2>test</H2>
      <H3>test</H3>
      <H4>test</H4>
      <Link to="https://www.google.com" highlight>
        test
      </Link>
      <P>
        In the Suikoden series, the player takes control of a battle party
        having a maximum of six people (consisting of the protagonist and 5
        other characters), Suikoden IV, however, reduces the party to four
        fighters and one support. The goal of the game is for the protagonist to
        defeat the opponents who are trying to oppose his/her team. This becomes
        possible as every game in the series revolves around the recruitment of
        the 108 Stars of Destiny; wherein the fighter characters recruited from
        the bunch can be used as members for the battle party; each game in the
        series have its respective Stars of Destiny. The series practically
        makes use of running around towns on different islands and into dungeons
        filled with monsters or enemies. A base or headquarters will also be
        obtained by the player which is usually abandoned, monster-infested
        castles which turns into bustling communities when captured.
      </P>
      <Hint>Hint</Hint> <Disabled>Disabled</Disabled> <Error>Error</Error>{" "}
      <Warn>Warn</Warn>
      <br/>
      <Link to="https://www.google.com" highlight>
        external {'  '}
      </Link>
      <Link to="/404" highlight>
        internal
      </Link>
      <Title>Long Title 1234</Title>
    </div>
  );
};

export default Landing;
