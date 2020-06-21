import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { FiArrowUp, FiShare2, FiSun, FiHome } from 'react-icons/fi'
import { withThemeContext } from '../../state/ThemeContext'

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
    transition: 1s;

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

const PageUp = styled(FiArrowUp)`
`

const Share = styled(FiShare2)`
`

const Home = styled(FiHome)`
`

const ToggleDark = styled(FiSun)`
`

const Toolbar = props => {
    const history = useHistory()
    const goHome = () => history.push('/')
    const scrollTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    return (
        <ToolbarContainer {...props}>
            <div themeContext={props.themeContext}>
                <ToggleDark title={props.themeContext.dark ? 'Light Mode' : 'Dark Mode'} onClick={props.themeContext.toggleDarkMode} {...props.darkProps} />
                <Home title="Home" onClick={goHome} {...props.homeProps} />
                <Share title="Share" {...props.shareProps} />
                <PageUp onClick={scrollTop} title="Back to Top" {...props.upProps} />
            </div>
        </ToolbarContainer>
    )
}

export default withThemeContext(Toolbar)