import { useEffect } from 'react'
import styled from 'styled-components'
import { withFetchContext } from '../../context/FetchContext'
import Link from '../common/Link'
import SetTitle from '../common/SetTitle'
import { Code, H1, H3, P } from '../common/Text'
import Title from '../common/Title'
import _Toolbar from '../common/Toolbar'
import ProjectSummary from './ProjectSummary'
import _SeeMore from './SeeMore'

const Right = styled.div`
    display: none; /* TODO */
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${({ tall }) => tall && '32px'};
    grid-column: ${({ tall }) => tall ? '2' : '4'};
    grid-row: ${({ tall }) => tall ? '2' : '1 / 4'};
`

const SectionTitle = styled(H1)`
    margin-bottom: 32px;
    z-index: 13;
`

const Section = styled.div`
    margin-bottom: 64px;
    padding-left: ${({ tall }) => tall ? 16 : 0}px;
    padding-right: ${({ tall }) => tall ? 16 : 0}px; 
`

const Content = styled.div`
    z-index: 13;
    grid-column: ${({ tall }) => tall ? '1' : '2 / 4'};
    grid-row: ${({ tall }) => tall ? '3' : '2'};
`

const Header = styled.div`
    padding-left: ${({ tall }) => tall ? 16 : 0}px;
    padding-right: ${({ tall }) => tall ? 16 : 0}px;
    grid-column: ${({ tall }) => tall ? '1' : '2 / 4'};
    grid-row: 1;

    * {
        max-width: 100%
    }
`

const SeeMore = styled(_SeeMore)`
    margin-top: 5rem;
`

const Landing = ({ tall, fetchJSON, fetchedData }) => {
    useEffect(() => {
        (async () => {
            await fetchJSON('/build/projects/__titles.json')
        })()
    }, [])

    return <>
        <SetTitle title="Projects | Aaron Huang" />
        <Header tall={tall}>
            <Title>Projects</Title>
            <P>Some of the things that I've gone and done.</P>
        </Header>
        <Content tall={tall}>
            {fetchedData.json ? Object.entries(fetchedData.json).map(
                ([k, v]) =>
                    <Section key={k} tall={tall}>
                        <SectionTitle>
                            <Link to={"/projects/" + k} alwaysHighlight>
                                <Code>{k}</Code>
                            </Link>
                        </SectionTitle>
                        <ProjectSummary path={v} tall={tall}/>
                    </Section>
            ) : ''}
            <SeeMore />
        </Content>
        <Right tall={tall}>
            right
        </Right>
    </>
}


export default withFetchContext(Landing)