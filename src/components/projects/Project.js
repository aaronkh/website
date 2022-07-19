import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { withFetchContext } from '../../context/FetchContext'
import { H1 } from '../common/Text'
import Markdown from '../common/Markdown'
import SetTitle from '../common/SetTitle'
import ArticleEndCard from '../common/ArticleEndCard'

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

const Project = ({ fetchText, fetchJSON, tall }) => {
    const { permalink } = useParams()
    const [markdown, setMarkdown] = React.useState('')
    const [metadata, setMetadata] = React.useState({})


    React.useEffect(() => {
        console.log(permalink)
        fetchText(`/build/projects/${permalink}.md`).then(setMarkdown)
        fetchJSON(`/build/projects/${permalink}.json`).then(setMetadata)
    }, [permalink])

    return (<>
        <SetTitle title={metadata.title + ' | Aaron Huang'} />
        <TitleSection tall={tall}>
            <Title>{metadata.title}</Title>
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

export default withFetchContext(Project)