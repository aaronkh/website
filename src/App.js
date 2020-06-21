import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'
import { ThemeContextProvider } from './state/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Switch>
          <Route path="" exact>
            <Landing />
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/blog">

          </Route>
          <Route path="/experiments">

          </Route>
          <Route path="/projects">

          </Route>
          <Route path="/resume">

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
