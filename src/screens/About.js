import DescriptionParagraph from "../components/about/DescriptionParagraph";
import FullLayout from "../components/common/FullLayout";
import Title from "../components/common/Title";
import Link from "../components/common/Link";
import Pic from "../components/about/Pic";
import { H3 } from "../components/common/Text";
import SetTitle from "../components/common/SetTitle";

const About = () => (
  <FullLayout>
    <SetTitle title="About | Aaron Huang" />
    <Title>About</Title>
    <H3>Hi, I'm Aaron.</H3>
    <Pic />
    <DescriptionParagraph>
      I'm currently an incoming junior at
      <span title="UC🅱">University of California, Berkeley</span>. I'm working
      on my B.A. in Computer Science with a minor in Music. I enjoy writing
      software, expressing creativity through code, and building things for
      people to use. I care a lot (sometimes excessively) about user experience
      and frontend design. With 4+ years of experience with Node.js, React,
      HTML/CSS/JS, and Python, most of what I build is for the web (though I've
      been delving into
      <Link to="https://www.github.com/aaronkh/learn_tf">
        ML with TensorFlow recently
      </Link>
      ).
    </DescriptionParagraph>
    <DescriptionParagraph>
      When I'm not in class or otherwise too busy, you can catch me at
      hackathons, in the practice rooms, or making something in the kitchen.
      Right now, I'm working on Bach's Fugue in C Major as well as perfecting my
      own (quarantine) bread recipe. You might also find me playing
      <Link to="https://na.op.gg/summoner/userName=Ieaverbuster">
        League of Legends
      </Link>
      late at night or
      <Link to="https://musescore.com/user/34990711">transcribing music</Link>
      that's been stuck in my head.
    </DescriptionParagraph>
    <DescriptionParagraph>
      I enjoy conversations about tech, music, and other stuff. Feel free to add
      me on <Link to="https://www.facebook.com/me.aahuang">Facebook</Link> or
      <Link to="https://www.linkedin.com/in/aaronkh/">LinkedIn</Link>. Or shoot
      me an email at
      <Link to="mailto:aahuang@berkeley.edu">aahuang@berkeley.edu</Link>.
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
);

export default About;
