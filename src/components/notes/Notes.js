import React from 'react'
import styled from 'styled-components'
import Toolbar from '../common/Toolbar'
import ViewContainer from '../common/ViewContainer'
import { Heading, Text } from '../common/Typography'
import { withThemeContext } from '../../state/ThemeContext'
import NotFound from '../common/NotFound'

const Title = styled(Heading)`
    font-family: 'Archivo Black', sans-serif;
    font-size: 3rem;
    margin-bottom: 0.5rem;
`

const NotesContainer = styled(ViewContainer)`
    text-align: left;
    & * {
        transition: 0.5s;
    }
`

const Subtitle = styled(Text)`
    // padding-bottom: 2rem;
    display: block;
`

const CustomNotFound = styled(NotFound)`
    border: 2px solid black;
    border-color: unset;
`

const Notes = props => {
    return (
        <NotesContainer>
            <Toolbar />
            <Title>
                Notes
            </Title>
            <Subtitle>
                Writings, musings, and other things I felt like jotting down.
            </Subtitle>
            <CustomNotFound/>
        </NotesContainer>
    )
}
export default withThemeContext(Notes)
