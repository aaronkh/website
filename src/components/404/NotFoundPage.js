import React from 'react'
import styled from 'styled-components'
import ViewContainer from '../common/ViewContainer'
import NotFound from "../common/NotFound";
import Toolbar from '../common/Toolbar'

const CustomToolbar = styled(Toolbar)`
    position: static;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3rem;
    margin-bottom: 3rem;
    & > div {
        width: 100%;
        justify-content: space-between;
        max-width: 400px;
        flex-direction: row;
        position: static;
    }
`

const NotFoundPage = props => 
<ViewContainer>
    <NotFound/>
    <CustomToolbar desktopWidth={1}/>
</ViewContainer>

export default NotFoundPage