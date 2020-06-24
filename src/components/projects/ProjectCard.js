import React from 'react'
import styled from 'styled-components'
import Card from '../common/Card'
import { withThemeContext } from '../../state/ThemeContext'
import Link from '../common/Link'
import { Heading, LongText } from '../common/Typography'

const ProjectCardContainer = styled(Card)`
    & * {
        transition: 0.5s;
    }
    display: flex;
    flex-direction: ${props => props.isMobile ? 'column' : 'row'};
    align-items: stretch;
    padding: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin: 0;
    margin-bottom: 2rem;
`

function getProject(url) {
    return (fetch(`/projects_src/${url}`).then(r => r.text())).then(JSON.parse)
}

const ProjectName = styled(Heading)`
    margin: 0;
    position: relative;
    width: auto;

    & span {
        position: relative;
        z-index: 2
    }

    &::before {
        content: "";
        z-index: 1;
        position: absolute;
        width: 110%;
        height: 0.75rem;
        bottom: 0px;
        left: 0px;
        background-color: ${props => props.themeContext.primaryLight};
    }
`

const ProjectDate = styled.div`
    font-size: 1.1rem;
    font-weight: 200;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
`
const ProjectDescription = styled(LongText)`
    flex-grow: 1;
`
const ProjectLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 0;
    margin-top: 1rem;
    padding-left: 0;
    line-height: 2rem;
    align-self: stretch;
`
const ProjectLink = styled(Link)`
    font-family: 'Fira Code', monospace;
    margin-left: 1rem;
    margin-right: 1rem;
`
const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
`
const ProjectImageLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    width: ${props => props.isMobile ? ';' : '30%'};
    &::before {
        display: none;
    }
`
const ProjectTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.isMobile ? ';' : '65%'};
    height: inherit;
    margin-top: ${props => props.isMobile ? '2rem' : ';'};
    padding-left: ${props => props.isMobile ? ';' : '2rem'};
    align-items: flex-start;
`

const ProjectCard = props => {
    const [data, setData] = React.useState(0)
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 900) // arbitrary width...

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    React.useEffect(() => {
        if (props.url && data === 0) getProject(props.url).then(setData).catch(() => setData(false))
    }, [props.url])

    if (!data) return <div />
    return (
        <ProjectCardContainer isMobile={isMobile}>
            <ProjectImageLink title={data.photos[0].text} href={window.location.origin + data.photos[0].url} isMobile={isMobile}>
                <ProjectImage src={data.photos[0].url} />
            </ProjectImageLink>
            <ProjectTextContainer isMobile={isMobile}>
                <ProjectName themeContext={props.themeContext}>
                    <span>{data.name}</span>
                </ProjectName>
                <ProjectDate>{data.date}</ProjectDate>
                <ProjectDescription>{data.description.split('\n').map(item =>
                    <>{item}<br /></>
                )}</ProjectDescription>
                <ProjectLinks>
                    {data.links.map(link =>
                        <ProjectLink key={link.url} href={link.url} lit>
                            {link.text}
                        </ProjectLink>)}
                </ProjectLinks>
            </ProjectTextContainer>
        </ProjectCardContainer>
    )
}

export default withThemeContext(ProjectCard)