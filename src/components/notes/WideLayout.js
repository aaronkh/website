import styled from 'styled-components'
import Title from '../common/Title'

const Container = styled.div`
    display: flex;
    padding: 24px;
`

const LeftSpacer = styled.div`
    flex-grow: 1;
`

const Left = styled.div`
    flex-grow: 2;
`

const Right = styled.div`
    display: flex; 
    flex-direction: column; 
    flex-grow: 1;
    align-items: flex-start;
`

const WideLayout = () => <Container>
    <LeftSpacer />
    <Left>
        <Title>Notes</Title>
    </Left>
    <Right>
        right
    </Right>
</Container>


export default WideLayout