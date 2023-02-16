import React from "react";
import SetTitle from "../components/common/SetTitle";
import ContactButton from "../components/landing/ContactButton";
import Container from "../components/landing/Container";
import List from "../components/landing/List";
import ListItem from "../components/landing/ListItem";
import Socials from "../components/landing/Socials";
import Title from "../components/landing/Title";
import ThemeSwitcher from "../components/common/ThemeSwitcher";
import ThemeSwitcherContainer from "../components/landing/ThemeSwitcherContainer";
import { Link } from "react-router-dom";

const Landing = () => (
  <>
    <SetTitle title="Aaron Huang" />
    <Container>
      <Title>
        The <a href="https://www.github.com/aaronkh/website">author of this website</a>{' '}
        is looking for a good job.
      </Title>
      <Socials />
      <List>
        <ListItem>
          Ex-Google, ex-Amazon, Berkeley alumni
        </ListItem>
        <ListItem>
          Looking for software engineering roles <Link to="/resume">(resume)</Link>
        </ListItem>
        <ListItem>
          Experienced mobile Android and frontend web developer
        </ListItem>
        <ListItem>
          10X+ hackathon winner <a href="https://www.devpost.com/aaronkh">(devpost)</a>
        </ListItem>
      </List>
      <ContactButton />
      <ThemeSwitcherContainer>
        <ThemeSwitcher />
      </ThemeSwitcherContainer>
    </Container>
  </>
);

export default Landing;
