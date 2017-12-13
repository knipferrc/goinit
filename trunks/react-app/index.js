import App from './src/components/App'
import React from 'react'
import { render } from 'react-dom'

render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
