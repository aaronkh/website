import React from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

import ViewContainer from '../common/ViewContainer'
import BusinessCard from './BusinessCard'

const LandingContainer = styled(ViewContainer)`
`

const Column = styled.div`
    width: ${isMobile? 'inherit':'50%'};
`

const Landing = props =>
    <LandingContainer>
        <Column>
            <BusinessCard />
        </Column>
        <Column>
            <div style={{background: 'red'}}></div>
        </Column>
    </LandingContainer>

export default Landing