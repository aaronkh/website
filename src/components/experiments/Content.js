import React from 'react'
import styled from 'styled-components'
const ContentContainer = styled.div`
    box-shadow: inset -1px -1px #0a0a0a,inset 1px 1px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff;
    height: 100%;
    margin: 0 auto;
    width: 600px;
    max-width: 100%;
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
                    </NameColumnCell>
                    <td>
                        <p>
                        Ever wish your League status was a long boi
                        </p>
                        ----------
                        <p>
                        <b>Instructions: https://github.com/aaronkh/needlessly-long-status</b>

                        </p>
                    </td>
                </tr>
                <tr>
                    <NameColumnCell>
                        <Name>
                        Devpost_Data
                        </Name>
                    </NameColumnCell>
                    <td>
                        <p>
                        Scraped collection of hackathon data from Devpost
                        </p>
                    </td>
                </tr>
            </tablebody>
        </ContentTable>
    </ContentContainer>
export default Content