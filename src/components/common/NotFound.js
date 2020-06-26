import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import { Heading, Subheading } from './Typography'
import { withThemeContext } from '../../state/ThemeContext'
import Image from './404.png'

const NotFoundContainer = styled.div`
    opacity: 0.6;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-color: unset;
    border-radius: 4px;
    padding: 2rem;
    padding-top: 1rem;
    text-align: center;
    position: relative;
    align-items: center;
    transition: 0.5s;

    & * {
        transition: color 0s !important;
    }
`

function randomAssistant() {
    return ['Hey Siri', 'OK Google', 'Alexa'][Math.floor(Math.random() * 3)]
}

const flavorTexts = [
    'Check back later?',
    'AND I OOP-',
    'Is this what they call a 404?',
    'We couldn\'t find what you\'re looking for.',
    '...unless you\'re looking for something invisible?',
    'Let\'s get you back on track.',
    'WE-',
    'Sometimes things go missing and that\'s OK.',
    '/r/backrooms',
    'The new frontier!',
    '[signals that enemies are missing]',
    `${randomAssistant()}, set a reminder me to add "${(() => window.location.pathname)()}" to my website.`,

]

const CustomLink = styled(Link)`
    text-decoration: underline;
    display: block;
    margin: 0 auto;
    width: max-content;
`

const MissingImage = styled.img`
    width: 100%;
    max-width: 350px;
    height: auto;
    margin-bottom: 3rem;
    filter: invert(${props => props.themeContext.dark ? 1 : 0});
`

const NotFound = props =>
    <NotFoundContainer {...props}>
        <Heading>
            Nothing here... yet
        </Heading>
        <Subheading>
            {flavorTexts[Math.floor(Math.random() * flavorTexts.length)]}
        </Subheading>
        <MissingImage themeContext={props.themeContext} src={Image} alt="where content go?" />
        <CustomLink href="/" highlight>
            <Subheading>Take me home!</Subheading>
        </CustomLink>
    </NotFoundContainer>

export default withThemeContext(NotFound)