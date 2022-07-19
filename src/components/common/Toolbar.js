import React from "react"
import styled from 'styled-components'
import Headroom from 'react-headroom'
import { FiArrowUp, FiShare2, FiSun, FiHome, FiMoon } from 'react-icons/fi'
import { withThemeContext } from "../../context/ThemeContext"
import AspectSwitch from "./AspectSwitch"
import ShareMenu from "./ShareMenu"

const TallToolbarContainer = styled.div`
    display: flex;
    position: fixed;
    background: ${({ themeContext }) => themeContext.background};
    transition: 0.2s;

    & .headroom {
        position: fixed;
        transition: bottom 0.5s;
        right: 1rem;
        border: 1px solid  ${({ themeContext }) => themeContext.secondary};
    }
    & .headroom--unfixed {
        position: fixed;
        bottom: 1rem;
    }
    & .headroom--unpinned {
        bottom: -5rem;
    }
    & .headroom--pinned {
        bottom: 1rem;
    }

    svg {
        cursor: pointer;
        padding: 16px;
        font-size: 24px;
        transition: 0.1s;
        margin-bottom: -3px; /* ??? */
        * {
            filter: opacity(0.8)
        }
        position: relative;
        background: ${({ themeContext }) => themeContext.background};
    }
`

const InnerShadow = styled.div`
    background: transparent;
    border: 1px solid ${({ themeContext }) => themeContext.secondary};
    width: 100%;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(${({ i }) => (i + 1) * 6}px, ${({ i }) => (i + 1) * 6}px);
`

const WideToolbarContainer = styled.div`
    display: flex;
    margin: 32px;
    flex-direction: column;
    border: 1px solid  ${({ themeContext }) => themeContext.text};
    transition: 0.2s;
    opacity: 0.5;
    &:hover {
        opacity: 1;
        box-shadow: -4px 4px 0px 0px ${({ themeContext }) => themeContext.secondary}
    }
    > * {
        cursor: pointer;
        padding: 16px;
        font-size: 24px;
        transition: 0.1s;
    }
    *:hover {
        filter: drop-shadow( -2px 0px 0px ${({ themeContext }) => themeContext.secondary});
    }
`

const ToolbarInner = (props) => <>
    {props.themeContext.dark ?
        <FiSun title='Light Mode' onClick={props.themeContext.toggleDarkMode} /> :
        <FiMoon title='Dark Mode' onClick={props.themeContext.toggleDarkMode} />}
    <a href="/"><FiHome title="Home"></FiHome></a>
    <FiShare2 title="Share" onClick={props.openShare} />
    <FiArrowUp onClick={props.scrollTop} themeContext={props.themeContext} title="Back to Top" />
</>

const TallToolbar = props =>
    <TallToolbarContainer {...props}>
        <Headroom disableInlineStyles>
            {Array(4).fill(1).map((_, i) =>
                <InnerShadow key={i} i={i} themeContext={props.themeContext} />)}
            <ToolbarInner  {...props} />
        </Headroom>
    </TallToolbarContainer>

const WideToolbar = (props) =>
    <WideToolbarContainer {...props}>
        <ToolbarInner  {...props} />
    </WideToolbarContainer>

const Toolbar = props => {
    const [isShareOpen, setIsShareOpen] = React.useState(false)

    const functions = {
        openShare: () => setIsShareOpen(!isShareOpen),
        toggleDark: () => props.themeContext.toggleDarkMode(),
        scrollTop: () => window.scrollTo({
            top: 0, behavior:
                "smooth"
        })
    }

    return <>
        <ShareMenu open={isShareOpen} onClose={() => setIsShareOpen(false)} />
        {props.alwaysOpen ?
            <TallToolbar {...props} {...functions} /> :
            <AspectSwitch
                tall={
                    <TallToolbar {...props} {...functions} />}
                wide={
                    <WideToolbar {...props} {...functions} />} />}
    </>
}

export default withThemeContext(Toolbar)