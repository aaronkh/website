import React from "react";
import styled from "styled-components";
import {
  FiX,
  FiFacebook,
  FiTwitter,
  FiSend as FiTelegram,
  FiLinkedin,
  FiPocket,
  FiMail,
  FiCopy,
} from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  IoLogoReddit as FiReddit,
  IoLogoTumblr as FiTumblr,
} from "react-icons/io";
import { RiWeiboLine as FiWeibo } from "react-icons/ri";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TumblrShareButton,
  WeiboShareButton,
  PocketShareButton,
  EmailShareButton,
} from "react-share";
import { withThemeContext } from "../../context/ThemeContext";

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
  bottom: ${(props) => (props.open ? "2rem" : "-100vh")};
  z-index: 9999;
  background: ${(props) => props.themeContext.background};
  border: 2px solid ${(props) => props.themeContext.text};
  color: ${(props) => props.themeContext.text};
  font-size: 2rem;
  & svg {
    margin: 0.75rem;
    transform: translateY(0.25rem);
  }
  & svg:hover {
    color: ${(props) => props.themeContext.secondary};
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
    border: 1px solid ${(props) => props.themeContext.text};
    border-radius: 4px;
    color: ${(props) => props.themeContext.text};
    box-sizing: border-box;
    background: ${(props) => props.themeContext.background};
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
  }
  & .copy .button svg {
    transform: none;
    margin: 0rem;
    margin-right: 0.5rem;
  }
`;

const CopiedToast = styled.div`
  position: fixed;
  transition: 0.25s;
  top: ${(props) => (props.copied ? "2rem" : "-20rem")};
  background: ${(props) => props.themeContext.background};
  color: ${(props) => props.themeContext.text};
  padding: 1rem;
  margin: 0 auto;
  z-index: 9999;
  right: 0;
  left: 0;
  width: max-content;
  overflow-x: hidden;
  & .timer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.copied ? "0" : "100%")};
    background: ${(props) => props.themeContext.primary};
    height: 2px;
    transition: 1.25s;
  }
`;

const ShareMenu = (props) => {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    if (!copied) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  };

  if (props.open && navigator.share) {
    navigator
      .share({
        title: document.title,
        text: document.title + " |",
        url: window.location.toString(),
      })
      .then(props.onClose)
      .catch(props.onClose);
    return <></>;
  }
  return (
    <>
      <CopiedToast copied={copied} {...props}>
        <span>Text Copied!</span>
        <div className="timer" />
      </CopiedToast>
      <ShareMenuContainer {...props}>
        <FacebookShareButton
          quote={document.title}
          url={window.location.toString()}
        >
          <FiFacebook />
        </FacebookShareButton>
        <TwitterShareButton
          title={document.title}
          url={window.location.toString()}
        >
          <FiTwitter />
        </TwitterShareButton>
        <TelegramShareButton
          title={document.title}
          url={window.location.toString()}
        >
          <FiTelegram />
        </TelegramShareButton>
        <LinkedinShareButton
          title={document.title}
          source="Aaron Huang"
          url={window.location.toString()}
        >
          <FiLinkedin />
        </LinkedinShareButton>
        <TumblrShareButton
          title={document.title}
          caption={document.title}
          url={window.location.toString()}
        >
          <FiTumblr />
        </TumblrShareButton>
        <WeiboShareButton
          title={document.title}
          url={window.location.toString()}
        >
          <FiWeibo />
        </WeiboShareButton>
        <PocketShareButton
          title={document.title}
          url={window.location.toString()}
        >
          <FiPocket />
        </PocketShareButton>
        <RedditShareButton
          title={document.title}
          url={window.location.toString()}
        >
          <FiReddit />
        </RedditShareButton>
        <EmailShareButton
          subject={document.title}
          url={window.location.toString()}
        >
          <FiMail />
        </EmailShareButton>
        <div className="copy">
          <span className="text">{window.location.toString()}</span>
          <CopyToClipboard text={window.location.toString()}>
            <div className="button" onClick={copy}>
              <FiCopy />
            </div>
          </CopyToClipboard>
        </div>
        <div className="break" />
        <FiX onClick={props.onClose} style={{ cursor: "pointer" }} />
      </ShareMenuContainer>
    </>
  );
};

export default withThemeContext(ShareMenu);
