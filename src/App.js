import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Resume from './components/resume/Resume'
import { ThemeContextProvider } from './state/ThemeContext'
import Projects from './components/projects/Projects'

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/notes">

          </Route>
          <Route path="/experiments">

          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            404
          </Route>
        </Switch>
      </Router>
    </ThemeContextProvider>
  )
}

export default App;
