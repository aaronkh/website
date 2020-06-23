import styled from 'styled-components'

const Heading = styled.h1`
    font-family: 'Archivo';
    font-weight: 700;
`

const Subheading = styled.h2`
    font-family: 'Archivo';
    font-weight: 400;
`

const Text = styled.span`
    font-size: 1.2rem;
    line-height: 2rem;
    word-spacing: 0.2rem;
`

const LongText = styled.p`
    font-size: 1.1rem;
    line-height: 1.75rem;
    word-spacing: 0.2rem;
`

const Code = styled.code`
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
`

export {
    Heading, Subheading, Text, LongText, Code
}