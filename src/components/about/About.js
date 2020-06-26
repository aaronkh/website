import React from 'react'
import styled from 'styled-components'
import Toolbar from '../common/Toolbar'
import ViewContainer from '../common/ViewContainer'
import { Heading, Text } from '../common/Typography'
import { withThemeContext } from '../../state/ThemeContext'
import SetTitle from '../common/SetTitle'
import Link from '../common/Link'
import Face from './face.jpg'

const Title = styled(Heading)`
    font-family: 'Archivo Black', sans-serif;
    font-size: 3rem;
    margin-bottom: 0.5rem;
`

const NotesContainer = styled(ViewContainer)`
    text-align: left;
    & * {
        transition: 0.5s;
    }
`

const Subtitle = styled(Text)`
    padding-bottom: 1rem;
    display: block;
`

const DescriptionParagraph = styled(Text)`
    margin-top: 1rem;
    display: block;
    & a {
        border-bottom: 2px dashed black;
        border-bottom-color: unset;
    }
`

const Footer = styled.div`
    margin-top: 1rem;
`

const FaceImage = styled.div`
    width: ${props => props.isMobile? '90%':'30%'};
    float: ${props => props.isMobile? ';':'right'};
    margin-right: 1rem;
    margin: ${props => props.isMobile? '0 auto': ';'};
    margin-bottom: 0.5rem;

    & img {
        width: 100%;
        height: auto;
        border-radius: 50%;
    }
`


const About = props => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024)
    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <NotesContainer>
            <SetTitle title="About | Aaron Huang" />
            <Toolbar />
            <Title>
                About
            </Title>
            <Subtitle>
                Hi, I'm Aaron.
            </Subtitle>
            <FaceImage isMobile={isMobile}> 
                <img src={Face} alt="A pic of my face"/>
            </FaceImage>
            <DescriptionParagraph>
            I'm currently an incoming junior at <span title="UC🅱">University of California, Berkeley</span>. 
            I'm working on my B.A. in Computer Science with a minor in Music. I enjoy writing software, expressing
            creativity through code, and building things for people to use. I care a lot (sometimes excessively) 
            about user experience and frontend design. With 4+ years of experience with Node.js, React, HTML/CSS/JS, and Python, 
            most of what I build is for the web (though I've been delving into <Link href="https://www.github.com/aaronkh/learn_tf"> ML with TensorFlow recently</Link>). 
            </DescriptionParagraph>
            <DescriptionParagraph>
                When I'm not in class or otherwise too busy, you can catch me at hackathons, in the practice rooms, or making something in the kitchen.
                Right now, I'm working on Bach's Fugue in C Major as well as perfecting my own (quarantine) bread recipe. You might also find me playing{' '}
                <Link href="https://na.op.gg/summoner/userName=Ieaverbuster">League of Legends</Link> late at night or{' '}
                <Link href="https://musescore.com/user/34990711">transcribing music</Link> that's been stuck in my head.
            </DescriptionParagraph>
            <DescriptionParagraph>
                I enjoy conversations about tech, music, and other stuff. 
                Feel free to add me on <Link href="https://www.facebook.com/me.aahuang">Facebook</Link> or <Link href="https://www.linkedin.com/in/aaronkh/">LinkedIn</Link>.
                Or shoot me an email at <Link href="mailto:aahuang@berkeley.edu">aahuang@berkeley.edu</Link>.
            </DescriptionParagraph>
            <DescriptionParagraph>
                Thanks for visiting my website!
            </DescriptionParagraph>
                
            <Footer>
            <Link href="https://open.spotify.com/playlist/37i9dQZF1EpqI5kjYbSOAv"><span role="img" aria-label="spotify">🎵</span></Link>
            <Link href="https://en.wikipedia.org/wiki/Warrant_canary"><span role="img" aria-label="canary">🐤</span></Link>
            <DescriptionParagraph>
                <Link href="https://www.github.com/aaronkh/website">This site is open-source! Fork me.</Link>
            </DescriptionParagraph>
            <DescriptionParagraph>
                Icons by <Link href="https://feathericons.com/">Feather</Link>
            </DescriptionParagraph>
            <DescriptionParagraph>
                © Aaron Huang 2020
            </DescriptionParagraph>
            </Footer>
        </NotesContainer>
    )
}
export default withThemeContext(About)
