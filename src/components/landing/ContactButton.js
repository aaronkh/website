import styled from "styled-components"

const ButtonOuter = styled.a`
margin: 0.5rem;
margin-top: 1rem;
margin-bottom: 1rem;
border: 2px solid;
cursor: pointer;
border-radius: 1px;
align-self: center;
padding: 1.5rem;
padding-left: 2rem; 
padding-right: 2rem;
box-shadow: 4px 4px 0px 0px #5000FF;
transition: 0.1s;

:hover {
    box-shadow: 8px 8px 0px 0px #5000FF;
}
`

const ButtonText = styled.span`
    text-transform: uppercase;
    font-family: monospace;
    font-size: 1.3rem
`

const ContactButton = () => {
    return <ButtonOuter href="mailto:huang.aaron03@gmail.com?subject=Hello from aaronkh.xyz!">
        <ButtonText>
            Contact
        </ButtonText>
    </ButtonOuter>
}

export default ContactButton