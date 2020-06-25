import React from 'react'
import styled from 'styled-components'
import {
    FiX,
    FiFacebook,
    FiTwitter,
    FiSend as FiTelegram,
    FiLinkedin,
    FiPocket,
    FiMail,
    FiCopy
} from 'react-icons/fi'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
    IoLogoReddit as FiReddit,
    IoLogoTumblr as FiTumblr
} from 'react-icons/io'
import { RiWeiboLine as FiWeibo } from 'react-icons/ri'
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TumblrShareButton,
    WeiboShareButton,
    PocketShareButton,
    EmailShareButton
} from 'react-share'
import { withThemeContext } from '../../state/ThemeContext'
import Card from './Card'

const ShareMenuContainer = styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: max-content;
    max-width: 80vw;
    max-height: 100vh;
    margin: 0 auto;
    padding: 0.75rem;
    padding-top: 1.5rem;
    left: 0; 
    right: 0;
    transition: 0.25s;
    transition-timing-function: ease-out;
    bottom: ${props => props.open ? '1rem' : '-100vh'};
    z-index: 9999;
    border-radius: 4px;
    background: ${props => props.themeContext.secondary};
    color: ${props => props.themeContext.background};
    font-size: 2rem;

    & svg {
        margin: 0.75rem;
        transform: translateY(0.25rem)
    }

    & .break {
        flex-basis: 100%;

    }

    & .copy {
        flex-grow: 1;
        display: flex;
        font-size: 1.2rem;
        align-items: center;
        margin-top: 0;
        border: 1px solid ${props => props.themeContext.secondaryDark};
        border-radius: 4rem;
        color: rgba(255, 255, 255, 0.9);
        box-sizing: border-box;
        background: ${props => props.themeContext.secondaryDark};
    }

    .copy * {
        margin-bottom: 0;
    }

    & .copy .text {
        font-size: 1rem;
        flex-grow: 1;
        margin: 0.5rem;
        margin-left: 1rem;
    }

    & .copy .button {
        cursor: pointer;
        flex-shrink: 1;
        margin: 0;
        margin-right: 0.5rem;
        background: ${props => props.themeContext.secondaryDark};
    }

    & .copy .button svg {
        transform: none;
        margin: 0rem;
        margin-right: 0.5rem
    }
`

const CopiedToast = styled(Card)`
    position: fixed;
    transition: 0.25s;
    top: ${props => props.copied? '2rem':'-5rem'};
    background: black;
    color: white;
    padding: 1rem;
    margin: 0 auto;
    z-index: 9999;
    right: 0; left: 0;
    width: max-content;
`

const ShareMenu = props => {
    const [copied, setCopied] = React.useState(false)

    const copy = () => {
        if(!copied) {
            setCopied(true)
            setTimeout(() => setCopied(false), 1000)
        }
    }

    if (props.open && navigator.share) {
        navigator.share({
            title: document.title,
            text: document.title + ' |',
            url: window.location.toString()
        })
        .then(props.onClose)
        .catch(props.onClose)
        return (<></>)
    }
    return (
        <>
        <CopiedToast copied={copied}>
            Text Copied!
        </CopiedToast>
        <ShareMenuContainer {...props}>
            <FacebookShareButton quote={document.title} url={window.location.toString()}>
                <FiFacebook />
            </FacebookShareButton>
            <TwitterShareButton title={document.title} url={window.location.toString()}>
                <FiTwitter />
            </TwitterShareButton>
            <TelegramShareButton title={document.title} url={window.location.toString()}>
                <FiTelegram />
            </TelegramShareButton>
            <LinkedinShareButton title={document.title} source="Aaron Huang" url={window.location.toString()}>
                <FiLinkedin />
            </LinkedinShareButton>
            <TumblrShareButton title={document.title} caption={document.title} url={window.location.toString()}>
                <FiTumblr />
            </TumblrShareButton>
            <WeiboShareButton title={document.title} url={window.location.toString()}>
                <FiWeibo />
            </WeiboShareButton>
            <PocketShareButton title={document.title} url={window.location.toString()}>
                <FiPocket />
            </PocketShareButton>
            <RedditShareButton title={document.title} url={window.location.toString()}>
                <FiReddit />
            </RedditShareButton>
            <EmailShareButton subject={document.title} url={window.location.toString()}>
                <FiMail />
            </EmailShareButton>
            <div className="copy">
                <span className="text">{window.location.toString()}</span>
                <CopyToClipboard text={window.location.toString()}>
                    <div className="button" onClick={copy}><FiCopy /></div>
                </CopyToClipboard>
            </div>
            <div className="break" />
            <FiX onClick={props.onClose} style={{ cursor: 'pointer' }} />
        </ShareMenuContainer>
        </>
    )
}

export default withThemeContext(ShareMenu)