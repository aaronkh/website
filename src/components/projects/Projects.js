import React from 'react'
import styled from 'styled-components'
import Toolbar from '../common/Toolbar'
import ViewContainer from '../common/ViewContainer'
import { Heading, Text } from '../common/Typography'
import { withThemeContext } from '../../state/ThemeContext'
import ProjectCard from './ProjectCard'

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

const Line = styled.div`
    width: 100%;
    height: 2px;
    background: ${props => props.themeContext.text};
`

function getProjects() {
    return fetch('/projects_src/_')
}

const Projects = props =>{
    const [projects, setProjects] = React.useState([])

    React.useEffect(() => {
        if(projects)
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
            <Line themeContext={props.themeContext} />
            {projects.map(p => <ProjectCard key={p.url} url={p.url}/>)}
        </ProjectContainer>
)}
export default withThemeContext(Projects)
