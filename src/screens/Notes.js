import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Base from '../components/notes/Index'
import Note from '../components/notes/Note'

const Notes = () =>
    <Routes>
        <Route path="/">
            <Route index element={<Base />} />
            <Route path="/:permalink" element={<Note />} />
            <Route path="tagged/:tag" />
        </Route>
    </Routes>

export default Notes