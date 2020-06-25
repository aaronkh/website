import React from 'react'
import styled from 'styled-components'

import ScrollTop from './ScrollTop'
import { withThemeContext } from '../../state/ThemeContext'

const FullPage = styled.div`
    min-height: 100%;
    width: 100%;
    background: ${props => props.themeContext.background};
    color: ${props => props.themeContext.text};
    display: flex;
`

const Inner = styled.div`
    max-width: 1024px;
    width: 100%;
    padding: 1rem;
    margin: 0 auto;
    overflow-x: hidden;
`

const ViewContainer = props =>
    <FullPage themeContext={props.themeContext}>
        <ScrollTop/>
        <Inner {...props}>
            {props.children}
        </Inner>
    </FullPage>

export default withThemeContext(ViewContainer)