import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { injectGlobal } from 'styled-components'
import { renderRoutes } from 'react-router-config'
import routes from '../../routes'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
`

const App = () => <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>

export default App
