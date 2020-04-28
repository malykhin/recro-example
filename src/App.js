import React from 'react'
import { BrowserRouter as Router, useLocation, useHistory, Link } from 'react-router-dom'

import { RecroProvider, RecroContainer } from 'recro/host'

import Trigger from './Trigger'
import './App.css'

export default function App() {
  return (
    <Router>
      <RecroProvider useLocation={useLocation} useHistory={useHistory}>
        <Trigger />
        <div className="nav_bar">
          <Link to="/a">a</Link>
          <Link to="/b">b</Link>
        </div>
        <div className="app">
          <RecroContainer name="a" src="http://localhost:3001" />
          <RecroContainer name="b" src="http://localhost:3002" />
        </div>
      </RecroProvider>
    </Router>
  )
}
