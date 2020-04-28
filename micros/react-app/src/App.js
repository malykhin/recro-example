import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import { useAppReadyEvent, useHostNavigationChange } from 'recro/react-client'
import logo from './logo.svg'
import './App.css'

function App() {
  useAppReadyEvent()
  useHostNavigationChange(useHistory)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/a">Path a</Route>
          <Route path="/b">Path b</Route>
        </Switch>
      </header>
    </div>
  )
}

export default App
