import React from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import { useHistory } from 'react-router-dom'
import { FiArrowUp, FiShare2, FiSun, FiHome } from 'react-icons/fi'
import { withThemeContext } from '../../state/ThemeContext'
import ShareMenu from './ShareMenu'
/*
share
light mode
to top
home
*/

const ToolbarContainer = styled.div`
    opacity: 0.5;
    position: absolute;
    right: -16px;
    display: flex;
    top: 0;
    flex-direction: column;
    visibility: hidden;
    & * {
        transition: color 0s !important;
    }
    & > * {
        visibility: visible;
        cursor: pointer;
        position: fixed;
        padding: 0.5rem;
        bottom: 2rem;
        display: flex;
        flex-direction: column;
        border: 1px solid ${props => props.themeContext.secondary};
        border-radius: 3px;
    }

    & svg {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.5rem;
        opacity: 0.5;
        color: ${props => props.themeContext.secondary};
    }

    & svg:hover {
        opacity: 0.9;
    }
`


const Share = styled(FiShare2)`
`

const Home = styled(FiHome)`
`

const ToggleDark = styled(FiSun)`
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`

const MobileToolbarContainer = styled.div`
    z-index: 999;
    position: fixed;

    & * {
        transition: color 0s, bottom 0.5s;
    }
    & .headroom {
        position: fixed;
        right: 1rem;
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

    & svg {
        padding: 1rem;
        background: ${props => props.themeContext.secondary};
        color: ${props => props.themeContext.background};
        cursor: pointer;
    }
`
const PageUp = styled(FiArrowUp)`
    background: ${props => props.themeContext.secondaryDark + '!important'};
    padding: 0.9rem !important;
    transform: translateY(4px);
    border-radius: 4px;
    height: 2.5rem;
    width: 2.5rem
`


const Toolbar = props => {
    let desktopWidth = props.desktopWidth || 1300
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < desktopWidth)
    const [isShareMenuOpen, setIsShareMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < desktopWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const history = useHistory()
    const goHome = () => { history.push('/'); scrollTop() }
    const scrollTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    if (isMobile) {
        return (
            <>
            <ShareMenu open={isShareMenuOpen} isMobile={true} onClose={() => setIsShareMenuOpen(false)} />

            <MobileToolbarContainer {...props}>
                <Headroom disableInlineStyles>
                    <ToggleDark title={props.themeContext.dark ? 'Light Mode' : 'Dark Mode'} onClick={props.themeContext.toggleDarkMode} />
                    <Home title="Home" onClick={goHome} />
                    <Share title="Share" onClick={() => setIsShareMenuOpen(true)} />
                    <PageUp onClick={scrollTop} title="Back to Top" themeContext={props.themeContext} />
                </Headroom>
            </MobileToolbarContainer>
            </>
        )
    }

    return (
        <>
            <ShareMenu open={isShareMenuOpen} isMobile={false} onClose={() => setIsShareMenuOpen(false)} />
            <ToolbarContainer {...props}>
                <div themeContext={props.themeContext}>
                    <FiSun title={props.themeContext.dark ? 'Light Mode' : 'Dark Mode'} onClick={props.themeContext.toggleDarkMode} {...props.darkProps} />
                    <Home title="Home" onClick={goHome} {...props.homeProps} />
                    <Share title="Share" {...props.shareProps} onClick={() => setIsShareMenuOpen(true)} />
                    <FiArrowUp onClick={scrollTop} themeContext={props.themeContext} title="Back to Top" {...props.upProps} />
                </div>
            </ToolbarContainer>
        </>
    )
}

export default withThemeContext(Toolbar)