import React from 'react'
import styled from 'styled-components'
import { withRouter, useHistory } from 'react-router-dom'
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

    & * {
        cursor: pointer;
    }
`

const Toolbar = props =>{
    const history = useHistory()
    const goHome = () => history.push('/')
    const scrollTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    return (
    <ToolbarContainer {...props}>
        <FiSun title={props.themeContext.dark? 'Light Mode':'Dark Mode'} onClick={props.themeContext.toggleDarkMode} {...props.darkProps} />
        <FiHome title="Home" onClick={goHome} {...props.homeProps} />
        <FiShare2 title="Share" {...props.shareProps} />
        <FiArrowUp onClick={scrollTop} title="Back to Top" {...props.upProps} />
    </ToolbarContainer>
    )}

export default withRouter(withThemeContext(Toolbar))