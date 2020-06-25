import React from 'react'
import styled from 'styled-components'
import Toolbar from '../common/Toolbar'
import ViewContainer from '../common/ViewContainer'
import { Heading, Text } from '../common/Typography'
import { withThemeContext } from '../../state/ThemeContext'
import CRT from './CRT'
import Content from './Content'

const Title = styled(Heading)`
    font-family: 'Archivo Black', sans-serif;
    font-size: 3rem;
    margin-bottom: 0.5rem;
`

const ExperimentsContainer = styled(ViewContainer)`
    text-align: left;
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
