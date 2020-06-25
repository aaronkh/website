import React from 'react'
import styled from 'styled-components'
import NLS from './nls.png'
import DevpostImage from './devpost.png'

const ContentContainer = styled.div`
    box-shadow: inset -1px -1px #0a0a0a,inset 1px 1px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff;
    height: 100%;
    margin: 0 auto;
    width: 600px;
    max-width: 100%;
    margin-top: -2px;
    background: white;
    overflow-y: scroll;
    scrollbar-face-color:silver;
    scrollbar-shadow-color:#222;
    scrollbar-highlight-color:#888;
    scrollbar-3dlight-color:black;
    scrollbar-darkshadow-color:#333;
    scrollbar-track-color:grey;
    scrollbar-arrow-color:black;
    padding-top: 3rem;
`

const ContentTable = styled.table`
    width: 95%;
    border-collapse:collapse;
    margin: 0 auto;
    color: black;
    font-family: 'Fira Code', monospace;
    margin-bottom: 6rem;

    table-layout: auto;
    & tablebody, tr {
        width: 100%;
        display: table;
    }
    & td {
        border: 1px solid black;
        padding-left: 1rem;
        padding-right: 1rem;

    }

    & tablebody tr {
        display: table-row;
    }

    * {
        box-sizing: border-box
    }

    & tr a {
        word-wrap: anywhere
    }
`

const HeaderRow = styled.tr`
    font-weight: bold;
    background: black;
    color: white;
`

const NameColumnCell = styled.td`
    word-wrap: anywhere;
    text-align: center;
    max-width: 30%;
    padding: 1rem;
`

const Name = styled.div`
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`

const NameImage = styled.img`
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    height: auto;
    opacity: 0.7
`

const NameSubtitle = styled.div`
    font-weight: initial;
    font-size: 0.8rem;
`

const Content = props =>
    <ContentContainer>
        <ContentTable>
            <colgroup>
                <col></col>
                <col></col>
            </colgroup>
            <tablebody>
                <HeaderRow>
                    <td>Item</td>
                    <td>Description</td>
                </HeaderRow>
                <tr>
                    <NameColumnCell>
                        <Name>
                            Needlessly_Long_Status
                        </Name>
                        <NameImage src={NLS} />
                        <NameSubtitle>Joined Feb 2020</NameSubtitle>
                    </NameColumnCell>
                    <td>
                        <p>
                            The League of Legends client limits the length of your status. Ever wish it was longer? Well, now it's possible.
                        </p>
                        ----------
                        <p>
                            <b>Instructions and download: {' '}
                                <a href="https://github.com/aaronkh/needlessly-long-status" target="_blank" rel="noreferrer noopener">
                                    https://github.com/aaronkh/needlessly-long-status
                            </a>
                            </b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <NameColumnCell>
                        <Name>
                            Devpost_Data
                        </Name>
                        <NameImage src={DevpostImage} />
                        <NameSubtitle>Joined Apr 2020</NameSubtitle>
                    </NameColumnCell>
                    <td>
                        <p>
                            Scraped collection of 140k+ hackathon projects from Devpost. Will be used to find similarities, trends, etc.
                        </p>
                        ----------
                        <p style={{ fontFamily: 'serif', lineHeight: '2rem' }}>
                            View on Kaggle {'--> '}
                            <a href="https://www.kaggle.com/aahuang/devpost-project-data"
                                target="_blank"
                                style={{ textDecoration: 'underline' }}
                                rel="noreferrer noopener">
                                https://www.kaggle.com/aahuang/devpost-project-data
                            </a>
                            <br />
                            See the GitHub {'-->  '}
                            <a href="https://github.com/aaronkh/devpost-data"
                                target="_blank"
                                style={{ textDecoration: 'underline' }}
                                rel="noreferrer noopener">
                                https://github.com/aaronkh/devpost-data
                            </a>
                        </p>
                    </td>
                </tr>
            </tablebody>
        </ContentTable>
    </ContentContainer>
export default Content