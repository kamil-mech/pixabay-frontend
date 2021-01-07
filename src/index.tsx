import React from 'react'
import ReactDOM from 'react-dom'

import { AppWrapper, AppContent } from './App'

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <AppContent />
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root')
)
