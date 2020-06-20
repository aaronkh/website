import React from 'react'
import styled from 'styled-components'

import { withThemeContext } from '../../state/ThemeContext'

const FullPage = styled.div`
    height: 100%;
    width: 100%;
    background: ${props => props.themeContext.background};
    color: ${props => props.themeContext.text}
`

const Inner = styled.div`
    max-width: 1024px;
    padding: 1rem;
    margin: 0 auto;
`

const ViewContainer = props =>
    <FullPage {...props}>
        <Inner>
            {props.children}
        </Inner>
    </FullPage>

export default withThemeContext(ViewContainer)