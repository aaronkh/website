import { useEffect } from 'react'
import styled from 'styled-components'
import { withFetchContext } from '../../context/FetchContext'
import { splitDate, stringify } from '../../util/DateUtil'
import Link from '../common/Link'
import SetTitle from '../common/SetTitle'
import { Code, H1, H3, P } from '../common/Text'
import Title from '../common/Title'
import _Toolbar from '../common/Toolbar'

const Right = styled.div`
    display: none; /* TODO */
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${({ tall }) => tall && '32px'};
    grid-column: ${({ tall }) => tall ? '2' : '4'};
    grid-row: ${({ tall }) => tall ? '2' : '1 / 4'};
`

const SectionTitle = styled(H1)`
    margin-bottom: 40px;
    z-index: 13;
`

const ItemTitle = styled(H3)`
    font-weight: normal;
    margin-bottom: 24px;
`

const Section = styled.div`
    margin-bottom: 24px;
`

const Content = styled.div`
    z-index: 13;
    grid-column: 2 / 4;
    grid-row: ${({ tall }) => tall ? '3' : '2'};
`

const Header = styled.div`
    margin-bottom: 16px;
    // margin-top: 8px;
    grid-column: 2 / 4;
    grid-row: 1;
`

const Landing = ({ tall, fetchJSON, fetchedData }) => {
    useEffect(() => {
        (async () => {
            await fetchJSON('build/notes/__months.json')
        })()
    }, [])

    return <>
        <SetTitle title="Aaron Huang | Notes" />
        <Header>
            <Title>Notes</Title>
            <P>Writings, musings, and other things I felt like jotting down.</P>
        </Header>
        <Content tall={tall}>
            {fetchedData.json ? Object.entries(fetchedData.json).map(
                ([k, v]) => <Section key={k}>
                    <SectionTitle>
                        <Link to={"/date/" + k} alwaysHighlight>
                            <Code>{stringify(splitDate(k))}</Code>
                        </Link>
                    </SectionTitle>
                    {Array.isArray(v) && v.map(({ title, path }) =>
                        <ItemTitle key={path}>
                            <Link to={'/' + path}>{title}</Link>
                        </ItemTitle>)}
                </Section>
            ) : ''}
        </Content>
        <Right tall={tall}>
            right
        </Right>
    </>
}


export default withFetchContext(Landing)