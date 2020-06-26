import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { FiLinkedin, FiGithub, FiMail, FiPhoneCall } from 'react-icons/fi'
import Card from '../common/Card'
import Link from '../common/Link'
import { ReactComponent as FlipArrow } from './flip-arrow.svg'
import { withThemeContext } from '../../state/ThemeContext'
import Face from './face.png'

const Container = styled(Card)`
    cursor: pointer;
    padding: 1.5rem;
    padding-bottom: 3rem;
    padding-top: 3rem;
    max-width: 500px;
    margin: 0 auto;
    display: ${({ isNarrow }) => isNarrow ? 'block' : 'flex'};
    align-items: flex-start;
    position: relative;
    transition: transform 100ms;

    &.flip-exit-active {
        transition-timing-function: ease-in;
        transform: scaleY(0);
    }

`

const Name = styled.div`
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    margin: 0.5rem;
    margin-bottom: ${({ isNarrow }) => isNarrow ? '2rem' : '0.5rem'};
    height: ${({ isNarrow }) => isNarrow ? 'unset' : '100%'};
    text-align: ${({ isNarrow }) => isNarrow ? 'left' : 'center'};
    position: relative;
    width: max-content;
    & span {
        z-index: 99;
        position: relative;
    }

    &::before {
        content: "";
        position: absolute;
        width: 110%;
        height: 0.75rem;
        bottom: -2px;
        left: -8px;
        background-color: ${props => props.themeContext.primaryLight};
        filter: ${props => props.themeContext.dark ? 'brightness(90%)' : ';'}
    }

`

const Links = styled.ul`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0;
    font-family: 'Fira Code', monospace;
    line-height: 2rem;
    align-items: ${({ isNarrow }) => isNarrow ? 'flex-start' : 'stretch'};
    margin-bottom: ${({ isNarrow }) => isNarrow ? '1rem' : '0rem'};
    padding-left: ${({ isNarrow }) => isNarrow ? '0.5rem' : ';'};
`

const LinkText = styled.span`
    margin-left: 8px;
`

const Front = props =>
    <div style={{ display: 'inherit', visibility: props.in ? 'unset' : 'hidden' }}>
        <Name themeContext={props.themeContext} isNarrow={props.isNarrow}>
            <span> Aaron Huang </span>
        </Name>
        <Links isNarrow={props.isNarrow}>
            <Link highlight="grey" href="https://www.github.com/aaronkh">
                <FiGithub /><LinkText>aaronkh</LinkText>
            </Link>
            <Link highlight="purple" href="mailto:aahuang@berkeley.edu">
                <FiMail /><LinkText>aahuang@berkeley.edu</LinkText>
            </Link>
            <Link highlight="green" href="tel:415-812-6317">
                <FiPhoneCall /><LinkText>(415) 812-6317</LinkText>
            </Link>
            <Link highlight="#2560AD" href="https://www.linkedin.com/in/aaronkh">
                <FiLinkedin /><LinkText>linkedin</LinkText>
            </Link>
        </Links>
    </div>

const BackLayout = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    display: grid;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 2rem;
    margin: 0 auto;
    visibility: ${props => props.in ? 'unset' : 'hidden'};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: ${({ isNarrow }) => isNarrow ?
        `"looking pic"
         "looking links"`
        :
        `"looking pic"
        "links links"`}
        ;
    row-gap: 12px;
    font-family: 'Fira Code', monospace;
`

const BackPic = styled.div`
    grid-area: pic;
    text-align: center;
    display: flex;
    align-items: center;
    & img {
        margin: 0 auto;
        height: inherit;
        width: inherit;
        max-width: 50%;
        filter: ${props => props.themeContext && (`invert(${props.themeContext.dark ? 0 : 1})`)};
        opacity: 0.7;
    }
`

const BackLooking = styled.div`
    grid-area: looking;
    border-right: 1px solid black;
    padding: 0.5rem;
`

const BackLinks = styled.div`
    grid-area: links;
    display: flex;
    justify-content: space-around;
    padding-left: ${({ isNarrow }) => isNarrow ? '2rem' : ';'};
    align-items: ${({ isNarrow }) => isNarrow ? 'flex-start' : 'center'};
    flex-direction: ${({ isNarrow }) => isNarrow ? 'column' : 'row'};
`

const Enter = styled.div`
    transition: 250ms;
    transition-timing-function: ease-out;
    transform: translateY(-50vh) rotate(-15deg);
    &.enter-appear-done {
        transform: translateY(0vh);
    }
`

const Back = props =>
    <BackLayout {...props}>
        <BackPic></BackPic>
        <BackLooking>
            <span style={{ fontWeight: 'bold' }}>
                Ask to me about:{' '}
            </span>
            <span>front-end/mobile dev, data science, music theory, weird hackathon ideas </span>
        </BackLooking>
        <BackPic themeContext={props.themeContext}>
            <img alt="my face" src={Face}></img>
        </BackPic>
        <BackLinks isNarrow={props.isNarrow}>
            <Link href='./taggged/ui' lit={true}>UI/UX</Link>
            <Link href='./tagged/data' lit={true}>data</Link>
            <Link href='./tagged/ml' lit={true}>ml</Link>
            <Link href='./tagged/music' lit={true}>music</Link>
        </BackLinks>
    </BackLayout>

const RotateIcon = styled(FlipArrow)`
    width: 6rem;
    height: 3rem;
    fill: ${props => props.themeContext.text};
    transform: scaleX( -1) rotate(-110deg);
`

const RotateIconContainer = styled.div`
    position: absolute;
    right: ${({ isNarrow }) => isNarrow ? '-0.75rem' : '-2.75rem'}; bottom: -1rem;
    transition: 500ms;
    opacity: 0;

    &.enter-appear-done {
        opacity: ${({ isNarrow }) => isNarrow ? 0.9 : 0.8};
    }

`

const BusinessCard = props => {
    const [reversed, setReversed] = React.useState(false)
    const [isFlipping, setIsFlipping] = React.useState(false)
    const [isNarrow, setIsNarrow] = React.useState(window.innerWidth < 600)
    const [arrowShow, setArrowShow] = React.useState(false)

    React.useEffect(() => {
        const handleResize = () => setIsNarrow(window.innerWidth < 600)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    React.useEffect(() => { setTimeout(() => setArrowShow(true), 500) }, [])

    return (
        <div style={{ marginBottom: '3rem' }}>
            <CSSTransition
                timeout={1}
                in={true}
                appear
                classNames='enter'>
                <Enter>
                    <CSSTransition
                        timeout={100}
                        classNames='flip'
                        in={isFlipping}
                        onEnter={() => { setIsFlipping(false) }}
                        onExited={() => setReversed(!reversed)}>
                        <Container onClick={() => { setIsFlipping(true); props.onClick && props.onClick() }} isNarrow={isNarrow}>
                            <Front themeContext={props.themeContext} in={!reversed} isNarrow={isNarrow} />
                            <Back themeContext={props.themeContext} in={reversed} isNarrow={isNarrow} />
                        </Container>
                    </CSSTransition>
                </Enter>
            </CSSTransition>
            <RotateIconContainer className={arrowShow ? 'enter-appear-done' : ''} isNarrow={isNarrow}>
                <RotateIcon
                    className="enter-appear-done"
                    alt="Flip!"
                    themeContext={props.themeContext} />
            </RotateIconContainer>
        </div>)
}

export default withThemeContext(BusinessCard)