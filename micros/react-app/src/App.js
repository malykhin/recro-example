import React, { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import { useAppReadyEvent, useHostNavigationChange } from 'recro/react-client'

import { clientMessages } from 'recro/core'

import logo from './logo.svg'
import './App.css'

function App() {
  useAppReadyEvent()
  useHostNavigationChange(useHistory)
  const [isModal, setModal] = useState(false)

  function toggleModal() {
    setModal(!isModal)
    clientMessages.modalMode(!isModal)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/nav1">Path: /nav1</Route>
          <Route path="/nav2">Path: /nav2</Route>
        </Switch>
        <button onClick={toggleModal}>{isModal ? 'Close' : 'Open'} Modal</button>
      </header>
    </div>
  )
}

export default App
