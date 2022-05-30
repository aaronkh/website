import React from 'react'
import styled from 'styled-components'
import Link from '../components/common/Link'
import { H1, H2 } from '../components/common/Text'
import { withThemeContext } from '../context/ThemeContext'
import Image from '../components/not-found/404.png'

const NotFoundContainer = styled.div`
    opacity: 0.6;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-color: unset;
    border-radius: 4px;
    padding: 2rem;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    transition: 0.5s;

    & h2 {
        font-weight: inherit;
    }
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

const NotFound = ({ themeContext }) => <NotFoundContainer >
    <H1>
        Nothing here... yet
    </H1>
    <H2>
        {flavorTexts[Math.floor(Math.random() * flavorTexts.length)]}
    </H2>
    <MissingImage themeContext={themeContext} src={Image} alt="where content go?" />
    <CustomLink to="/">
        <H2>Take me home!</H2>
    </CustomLink>
</NotFoundContainer>

export default withThemeContext(NotFound)