import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Resume from './components/resume/Resume'
import { ThemeContextProvider } from './state/ThemeContext'
import Projects from './components/projects/Projects'
import NotFoundPage from './components/404/NotFoundPage'
import Notes from './components/notes/Notes'
import Experiments from './components/experiments/Experiments'

function App() {
  return (
    <ThemeContextProvider>
      <Router basename="/website">
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/experiments">
            <Experiments />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </ThemeContextProvider>
  )
}

export default App;
