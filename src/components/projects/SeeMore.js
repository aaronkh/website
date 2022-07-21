import React from 'react'
import Link from '../common/Link'
import styled from 'styled-components'
import { withThemeContext } from '../../context/ThemeContext'
import { P } from '../common/Text'

const Container = withThemeContext(styled(P)`
    padding: 24px;
    border: 0.5px solid white;
    margin: 36px;
    margin-bottom: 4rem;
    margin-top: 4rem;
    text-align: center;
    border: 1px solid  ${({ themeContext }) => themeContext.text};
    transition: 0.2s;
    box-shadow: 6px 6px 0px 0px ${({ themeContext }) => themeContext.primary};

    &:hover {
        opacity: 1;
        
        box-shadow: 8px 8px 0px 0px ${({ themeContext }) => themeContext.primary};
    }
`)

const SeeMore = props =>
    <Container {...props}>Want more? Check out my {' '}
        {' '}<Link to="/" underline>GitHub</Link> {' '} and {' '}
        <Link to="/" underline>Devpost</Link>.
    </Container>

export default SeeMore