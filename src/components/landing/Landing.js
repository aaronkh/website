import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import { Text } from '../common/Typography'
import ViewContainer from '../common/ViewContainer'
import BusinessCard from './BusinessCard'
import Link from '../common/Link'
import Toolbar from '../common/Toolbar'
import { withThemeContext } from '../../state/ThemeContext'
import SetTitle from '../common/SetTitle'

const LandingContainer = styled(ViewContainer)`
    display: ${({ isMobile }) => isMobile ? ';' : 'grid'};
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "col1 col2";
    padding-top: 2rem;
    margin: 0 auto;
    overflow-x: visible;
`

const Column = styled.div`
    max-width: 550px;
    opacity: 0;
    &.enter-appear-done {
        transition: opacity 1s;
        opacity: 1;
    }
`

const LongDescription = styled(Text)`
    opacity: 0;
    transition: color 1s;
    white-space: pre-line;
    position: relative;
    &.enter-appear-done {
        opacity: 1;
    }
    
    & br {
        display: ${({ isMobile }) => isMobile ? 'none' : ';'};
    }

    & br.special {
        display: inline;
    }
`

const LinkColumn = styled.ul`
    margin-left: ${({ isMobile }) => isMobile ? '-2rem;' : '2rem'};
    list-style: none;
    margin-top: ${({ isMobile }) => isMobile ? '1rem' : '-0.5rem;'};
`

const LinkItem = styled(Link)`
    font-size: 2rem;
    font-family: 'Archivo Black';
    line-height: 3rem
`

const CustomizedToolbar = styled(Toolbar)`
    position: unset;
    opacity: 0.8;
    transition: 1s;
    
    & div {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        margin-left: ${({ isMobile }) => isMobile ? ';' : '4rem'};
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: max-content;
        border: none;
        padding: 0;
        position: unset;
    }

    & svg {
        width: 2rem;
        height: 2rem;
        padding: 2rem;
        opacity: 0.66;
        transition: 0.5s;
        position: unset;
        margin: 0;
        border: 1px solid ${props => props.themeContext.secondary};
        color: ${props => props.themeContext.secondary};
    }

    & svg:hover {
        opacity: 1;
    }
`

const Landing = props => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024)
    const [isLoaded, setIsLoaded] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => setIsLoaded(true), 300)
    }, [])

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <LandingContainer isMobile={isMobile} >
            <SetTitle title="Aaron Huang" />
            <Column style={{ gridArea: 'col1' }} className="enter-appear-done">
                <BusinessCard />
                <LongDescription isMobile={isMobile} className={isLoaded? "enter-appear-done":""}>
                    Studying computer science @ <span title="Go bears! 🐻🐻🐻">UC Berkeley</span> c/o 2022. <br />
                    Open to new internship, full-time, and freelance opportunities. <br />
                    Android developer and Javascript enthusiast. <br />
                    10X+ hackathon veteran <Link href="https://devpost.com/aaronkh" lit>(devpost)</Link>. <br className="special" />
                    Working on automated boba with <Link href="https://devinmui.github.io/" lit> @devinmui</Link>. <br />
                    Based in the San Francisco Bay Area. 🌉
                </LongDescription>
            </Column>
            <CSSTransition in={true} timeout={300} classNames="enter" appear>
                <Column style={{ gridArea: 'col2' }}>
                    <LinkColumn isMobile={isMobile} >
                        <li><LinkItem href="/resume">Resume</LinkItem></li>
                        <li><LinkItem href="/projects">Projects</LinkItem></li>
                        <li><LinkItem href="/about">About</LinkItem></li>
                        <li><LinkItem href="/experiments">Experiments</LinkItem></li>
                        <li> <LinkItem href="/notes">Notes</LinkItem></li>
                    </LinkColumn>
                    <CustomizedToolbar isMobile={isMobile} desktopWidth={1} themeContext={props.themeContext} />
                </Column>
            </CSSTransition>
        </LandingContainer>)
}

export default withThemeContext(Landing)