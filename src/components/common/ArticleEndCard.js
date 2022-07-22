import styled from 'styled-components'
import Link from './Link'
import { withThemeContext } from '../../context/ThemeContext'
import { P, H2, Code } from './Text'

const Container = styled.div``

const Image = withThemeContext(styled.img`
    filter: ${({themeContext}) => themeContext.dark? '':'invert(0.9)'};
    width: 100px; float: left;
    border-radius: 50%;
    margin-left: 32px;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-right: 32px
`)

const Name = styled(H2)`
    margin-top: 0
`

const ArticleEndCard = (props) => <Container {...props}>
    <Image src="/face.png"/>
    <Link to="/about"><Code><Name>Aaron Huang</Name></Code></Link>
    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</P>
</Container>

export default ArticleEndCard