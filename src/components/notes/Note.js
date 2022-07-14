import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { withFetchContext } from '../../context/FetchContext'
import { Code, H1 } from '../common/Text'
import Markdown from '../common/Markdown'
import SetTitle from '../common/SetTitle'

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

const Title = styled(H1)`
    grid-column: ${({ tall }) => tall ? '1' : '2/4'};
    grid-row: 1;
    margin-top: ${({ tall }) => tall ? 40 : 56}px;
    margin-right: 16px;
    margin-left: 16px;
    font-family: 'Poppins';
    font-weight: normal;
    font-size: 3rem
`

const Note = ({ fetchText, fetchJSON, tall }) => {
    const { permalink } = useParams()
    const [markdown, setMarkdown] = React.useState('')
    const [metadata, setMetadata] = React.useState({})

    React.useEffect(() => {
        fetchText(`/build/notes/${permalink}.md`).then(setMarkdown)
        fetchJSON(`/build/notes/${permalink}.json`).then(setMetadata)
    }, [permalink])

    return (<>
        <SetTitle title={metadata.title + ' | Aaron Huang'} />
        <Title tall={tall}>{metadata.title}</Title>
        <Container tall={tall}>
            <Markdown >
                {markdown}
            </Markdown>
        </Container >
    </>)
}

export default withFetchContext(Note)