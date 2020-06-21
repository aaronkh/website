import styled from 'styled-components'
import { Link as RouterLink, withRouter } from 'react-router-dom'
import { withThemeContext } from '../../state/ThemeContext'


const External = styled.a`
    position: relative;
    z-index: 99;

    &::before {
        z-index: -1;
        content: "";
        position: absolute;
        width: 110%;
        height: 0.75rem;
        bottom: 4px;
        left: -4px;
        background-color: ${props => props.highlight || props.themeContext.primary};
        visibility: ${props => props.lit ? 'inherit' : 'hidden'};
        opacity: ${props => props.lit ? '0.25' : '0'};
        display:inline-block;
        white-space: nowrap;
    }

    &:hover::before {
        visibility: inherit;
        opacity: 0.25;
    }
`

const Internal = styled(RouterLink)`
    position: relative;
    z-index: 99;

    &::before {
        z-index: -1;
        content: "";
        position: absolute;
        width: 110%;
        height: 0.75rem;
        bottom: 4px;
        left: -8px;
        background-color: ${props => props.highlight || props.themeContext.primary};
        visibility: ${props => props.lit ? 'inherit' : 'hidden'};
        opacity: ${props => props.lit ? '0.25' : '0'};
    }

    &:hover::before {
        visibility: inherit;
        opacity: 0.25;
    }
`

const Link = props => {
    const stopProp = e => e.stopPropagation()
    if (props.href.startsWith('.') || props.href.startsWith('/')) {
        return Internal.render(Object.assign({}, props, {to: props.href, onClick: stopProp}))
    }
    else {
        return External.render(Object.assign({}, props, {onClick: stopProp, target: '_blank'}))
    }
}

export default withRouter(withThemeContext(Link))