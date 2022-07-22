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
    <P>
        SWE at Google Nest, UC Berkeley Alum (CS c/o '22). Focused on writing sustainable code, making creative things, and figuring out how the world works.
        <br/> 
        All opinions expressed are my own and have not been forcefully altered in any way.
    </P>
</Container>

export default ArticleEndCard