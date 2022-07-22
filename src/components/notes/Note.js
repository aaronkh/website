import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { withFetchContext } from '../../context/FetchContext'
import { Code, H1 } from '../common/Text'
import Markdown from '../common/Markdown'
import SetTitle from '../common/SetTitle'
import { withThemeContext } from '../../context/ThemeContext'
import { splitDate, stringify } from '../../util/DateUtil'
import ArticleEndCard from '../common/ArticleEndCard'
import ScrollTop from '../common/ScrollTop'

const Container = styled.div`
    grid-row: 3;
    padding-bottom: 3rem;
    display: flex; 
    flex-direction: column;
    grid-column: ${({ tall }) => tall ? '1' : '2/4'};

    > * {
        z-index: 99;
        max-width: 90vw;
        margin-right: 16px;
        margin-left: 16px;
    }
`

const TitleSection = styled.div`
    grid-column: ${({ tall }) => tall ? '1' : '2/4'};
    grid-row: 1;
    margin-top: 32px;
    margin-bottom: 32px;
`

const Title = styled(H1)`
    margin-right: 16px;
    margin-left: 16px;
    font-family: 'Poppins';
    font-weight: normal;
    font-size: 3rem
`

const Separator = styled.hr`
    margin-top: 32px;
    margin-bottom: 32px;
    opacity: 0.3
`

const DateWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 48px;
`

const DateText = styled.div`
    margin-left: 16px;
    margin-right: 16px;
    font-size: 1.2rem
`

const DateSpacer = withThemeContext(styled.div`
    height: 2px; 
    background: ${({ themeContext }) => themeContext.primary};
    opacity: 0.3;
    flex-grow: 1;

`)

const Note = ({ fetchText, fetchJSON, tall }) => {
    const { permalink } = useParams()
    const [markdown, setMarkdown] = React.useState('')
    const [metadata, setMetadata] = React.useState({})
    const [dateString, setDateString] = React.useState('')


    React.useEffect(() => {
        fetchText(`/build/notes/${permalink}.md`).then(setMarkdown)
        fetchJSON(`/build/notes/${permalink}.json`).then(setMetadata)
    }, [permalink])

    React.useEffect(() => {
        if (!metadata.timestamp) return
        let s = (new Date(metadata.timestamp * 1000)).toISOString().substring(0, 10)
        // TODO: make date clickable
        s = stringify(splitDate(s))
        setDateString(s)
    }, [metadata])

    return (<>
        <ScrollTop />
        <SetTitle title={metadata.title + ' | Aaron Huang'} />
        <TitleSection tall={tall}>
            <Title>{metadata.title}</Title>
            <DateWrapper>
                <DateSpacer />
                <DateText>{dateString}</DateText>
            </DateWrapper>
        </TitleSection>
        <Container tall={tall}>
            <Markdown >
                {markdown}
            </Markdown>
            <Separator />
            <ArticleEndCard />
        </Container >
    </>)
}

export default withFetchContext(Note)