import React from 'react'
import styled from 'styled-components'
import Toolbar from '../common/Toolbar'
import ViewContainer from '../common/ViewContainer'
import { Heading, Text } from '../common/Typography'
import { withThemeContext } from '../../state/ThemeContext'
import ProjectCard from './ProjectCard'
import Card from '../common/Card'

const Title = styled(Heading)`
    font-family: 'Archivo Black', sans-serif;
    font-size: 3rem;
    margin-bottom: 0.5rem;
`

const ProjectContainer = styled(ViewContainer)`
    text-align: left;
    & * {
        transition: 0.5s;
    }
`

const Subtitle = styled(Text)`
    padding-bottom: 2rem;
    display: block;
`

const MoreContainer = styled.div`
    margin: 0 auto;
    width: inherit;
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-around;
`

const More = styled(Card)`
    margin: 1rem;
    width: auto;
    background: ${props => props.themeContext.secondary};
    color: ${props => props.themeContext.background};
    padding: 1.25rem;
    border-radius: 2rem;
    opacity: 0.9;
    text-align: center;
    line-height: 1.5rem;

    &:hover {
        opacity: 1;
    }
`

function getProjects() {
    return fetch('/projects_src/_')
}

const Projects = props => {
    const [projects, setProjects] = React.useState([])

    React.useEffect(() => {
        if (projects)
            getProjects()
                .then(r => r.json())
                .then(setProjects)
                .catch(console.log)
    })

    return (
        <ProjectContainer>
            <Toolbar />
            <Title>
                Projects
            </Title>
            <Subtitle>
                A showcase of things that I've gone and done.
            </Subtitle>
            {projects.map(p => <ProjectCard key={p.url} url={p.url} />)}
            <MoreContainer>
            <More themeContext={props.themeContext}>
                Want more? Check out my {' '}
                <a
                    target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                    href="https://wwww.github.com/aaronkh">
                    GitHub
                </a>
                {' and '}
                <a
                    target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                    href="https://www.devpost.com/aaronkh">
                    Devpost
                </a>.
            </More>
            </MoreContainer>
        </ProjectContainer>
    )
}
export default withThemeContext(Projects)
