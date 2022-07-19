import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import AspectSwitch from '../components/common/AspectSwitch'
import Landing from '../components/notes/Landing'
import Note from '../components/notes/Note'
import _Toolbar from '../components/common/Toolbar'

const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(3, fit-content(0));
    grid-template-columns: repeat(${({ tall }) => tall ? 1 : 4}, 1fr);
    column-gap: 16px;
    min-height: 100%;
    position: relative;
`

const Toolbar = styled(_Toolbar)`
    grid-column: 1;
    grid-row: 1 / -1;
    justify-self: end;
    align-self: start;
    z-index: 999;

    ${({ tall, offset }) => tall ? '' : `transform: translateY(${offset}px)`};
`

const DESKTOP_TOOLBAR_HEIGHT = 275 // TODO: Fix this hack

const Inner = ({ tall }) => {
    const [toolbarOffset, setToolbarOffset] = React.useState(window.innerHeight + window.scrollY - DESKTOP_TOOLBAR_HEIGHT)
    React.useEffect(() => {
        const f = () =>
            setToolbarOffset(window.innerHeight + window.scrollY - DESKTOP_TOOLBAR_HEIGHT)
        f()
        window.addEventListener('scroll', f)
        return () => window.removeEventListener('scroll', f)
    }, [window.innerHeight])

    return (<Container tall={tall}>
        <Toolbar tall={tall} offset={toolbarOffset} />
        <Routes>
            <Route path="/">
                <Route index element={<Landing tall={tall} />} />
                <Route path="/:permalink" element={<Note tall={tall} />} />
                <Route path="tagged/:tag" />
                <Route path="date/:date" />
            </Route>
        </Routes>
    </Container>)
}
const Notes = () => <AspectSwitch tall={<Inner tall />} wide={<Inner />} />

export default Notes