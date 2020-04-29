import React from 'react'
import { BrowserRouter as Router, useLocation, useHistory } from 'react-router-dom'

import { RecroProvider, RecroContainer } from 'recro/host'

import Trigger from './components/Trigger'

import { useAppsConfig } from './hooks'

import FrameWrapper from './components/FrameWrapper'
import Frame from './components/Frame'
import NavLink from './components/NavLink'

import './App.css'

export default function App() {
  const [app1, app2] = useAppsConfig()

  return (
    <Router>
      <RecroProvider useLocation={useLocation} useHistory={useHistory}>
        <div className="app">
          <div className="nav_bar">
            <NavLink to="/nav1" title="Nav link 1" />
            <NavLink to="/nav2" title="Nav link 2" />
            <Trigger />
          </div>

          <div className="micros">
            {app1 && (
              <FrameWrapper
                title="React app"
                name={app1.name}
                frameComponent={<Frame fill="#dc143c" background="#f0f8ff" />}
              >
                <RecroContainer name={app1.name} src={app1.src} />
              </FrameWrapper>
            )}
            {app2 && (
              <FrameWrapper
                title="Vanilla app (a/b)"
                name={app2.name}
                frameComponent={<Frame fill="#1e90ff" background="#f0f8ff" />}
              >
                <RecroContainer name={app2.name} src={app2.src} />
              </FrameWrapper>
            )}
          </div>
        </div>
      </RecroProvider>
    </Router>
  )
}
