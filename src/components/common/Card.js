import styled from 'styled-components'
import {withThemeContext} from '../../state/ThemeContext'

const Card = styled.div`
    background: ${props => props.themeContext.background};
    margin: 1rem;
    padding: 1rem;
    box-shadow: ${props => props.themeContext.cardShadow};
    transition: all 333ms;
    border-radius: 16px;
    
    &:hover {
        box-shadow: ${props => props.themeContext.cardHover};
    }

    &.selected {
        box-shadow: ${props => props.themeContext.cardSelected};
        background: ${props => props.themeContext.cardSelectedBackground}
    }
`

export default withThemeContext(Card)