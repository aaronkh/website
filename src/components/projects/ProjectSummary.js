import React from 'react'
import styled from 'styled-components'
import Link from '../common/Link'
import _Markdown from '../common/Markdown'

const Container = styled.div`
    &::after {
        content: "";
        display: block;
        clear: both;
    }
`

const Image = styled.img`
    float: left;
    width: 33%;
    margin-right: ${({tall}) => tall? 16:32}px;
`

const Markdown = styled(_Markdown)`
`

const ProjectSummary = ({ path, tall }) => {
    const [preview, setPreview] = React.useState('')
    const [summary, setSummary] = React.useState('')
    const [tags, setTags] = React.useState([])

    React.useEffect(() => {
        (async function () {
            const data = await fetch(`/build/${path}.json`)
            const json = await data.json()
            setSummary(json.summary)
            setPreview(json.preview)
            setTags(json.tags)
        })()
    }, [path])

    return (
        <Container >
            <Link to={'/' + path}>
                <Image src={'/build/' + preview} tall={tall} />
                <Markdown>{summary}</Markdown>
                <Link to={'/' + path} highlight>(Read more...)</Link>
            </Link>
        </Container>)
}

export default ProjectSummary