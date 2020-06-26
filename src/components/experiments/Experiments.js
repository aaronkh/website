import React from 'react'
import styled from 'styled-components'
import Toolbar from '../common/Toolbar'
import ViewContainer from '../common/ViewContainer'
import { Heading, Text } from '../common/Typography'
import { withThemeContext } from '../../state/ThemeContext'
import SetTitle from '../common/SetTitle'
import CRT from './CRT'
import Content from './Content'

const Title = styled(Heading)`
    font-family: 'Archivo Black', sans-serif;
    font-size: 3rem;
    margin-bottom: 0.5rem;
`

const ExperimentsContainer = styled(ViewContainer)`
    text-align: left;
    max-width: 100vw;
    overflow-x: hidden;
    padding-bottom: 10rem;
    & * {
        transition: 0.5s;
    }
`

const Subtitle = styled(Text)`
    // padding-bottom: 2rem;
    display: block;
`

const Experiments = props => {
    return (
        <ExperimentsContainer>
            <SetTitle title="Experiments | Aaron Huang" />
            <Toolbar />
            <Title>
                Experiments
            </Title>
            <Subtitle>
                Interesting things to play with that may or may not work.
            </Subtitle>
            <CRT>
                <Content/>
            </CRT>
        </ExperimentsContainer>
    )
}
export default withThemeContext(Experiments)
