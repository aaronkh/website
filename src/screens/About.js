import styled from 'styled-components'
import DescriptionParagraph from "../components/about/DescriptionParagraph";
import FullLayout from "../components/common/FullLayout";
import Title from "../components/common/Title";
import LinkImport from "../components/common/Link";
import Pic from "../components/about/Pic";
import { H3 } from "../components/common/Text";
import SetTitle from "../components/common/SetTitle";
import _Toolbar from "../components/common/Toolbar";
import ScrollTop from '../components/common/ScrollTop';

const Link = props => <LinkImport {...props} underline />

const Toolbar = styled(_Toolbar)`
  z-index: 22
`

const About = () => (
  <>
    <ScrollTop />
    <FullLayout>
      <SetTitle title="About | Aaron Huang" />
      <Title>About</Title>
      <H3>Hi, I'm Aaron.</H3>
      <Pic />
      <DescriptionParagraph>
        I'm was a SWE working with the Google Nest team. I recently graduated from the {' '}
        <span title="UC🅱">University of California, Berkeley</span>{' '}
        with a Bachelors in Computer Science and a minor in Music. I enjoy writing
        software, expressing creativity through code, and building things for
        people to use. I care a lot (sometimes excessively) about user experience
        and design. With 6+ years of experience with Node.js, React,
        HTML/CSS/JS, and Python, most of what I build is for the web (though I've
        been delving into lower-level and embedded programming recently).
      </DescriptionParagraph>
      <DescriptionParagraph>
        When I'm not at work or otherwise too busy, you can catch me at
        hackathons, exploring the city, or making something in the kitchen.
        You might also find me dining at Taco Bell, playing {' '}
        <Link to="https://na.op.gg/summoner/userName=Ieaverbuster">
          League of Legends
        </Link> {' '}
        late at night or {' '}
        <Link to="https://musescore.com/user/34990711">transcribing music</Link> {' '}
        that's been stuck in my head.
      </DescriptionParagraph>
      <DescriptionParagraph>
        I enjoy conversations about tech, music, and other stuff. Feel free to add
        me on <Link to="https://www.facebook.com/me.aahuang">Facebook</Link> or {' '}
        <Link to="https://www.linkedin.com/in/aaronkh/">LinkedIn</Link>. Or shoot
        me an email at {' '}
        <Link to="mailto:huang.aaron03@gmail.com">huang.aaron03@gmail.com</Link>.
      </DescriptionParagraph>
      <DescriptionParagraph>Thanks for visiting my website!</DescriptionParagraph>
      <Link to="https://open.spotify.com/playlist/37i9dQZF1EpqI5kjYbSOAv">
        <span role="img" aria-label="spotify">
          🎵
        </span>
      </Link>
      <Link to="https://en.wikipedia.org/wiki/Warrant_canary">
        <span role="img" aria-label="canary">
          🐤
        </span>
      </Link>
      <Link to="https://www.glaad.org/support">
        <span role="img" aria-label="Support queer youth">
          🏳️‍🌈
        </span>
      </Link>
      <DescriptionParagraph>
        <Link to="https://www.github.com/aaronkh/website">
          This site is open-source! Fork me.
        </Link>
      </DescriptionParagraph>
      <DescriptionParagraph>
        Icons by <Link to="https://feathericons.com/">Feather</Link>
      </DescriptionParagraph>
      <DescriptionParagraph>© Aaron Huang 2022</DescriptionParagraph>
    </FullLayout>
    <Toolbar alwaysOpen />
  </>
);

export default About;
