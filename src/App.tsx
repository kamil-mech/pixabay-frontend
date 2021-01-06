import React, { ReactNode } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { History, createBrowserHistory } from 'history'

import Home from 'pages/Home'
import ImageDetails from 'pages/ImageDetails'
import NotFound from 'pages/NotFound'

import './i18n'

// Wrapper is shared with unit tests and storybook
// This way we ensure they use the same providers and contexts
// as the real app
export interface AppWrapperProps {
  history?: History
  children: ReactNode
}
const browserHistory = createBrowserHistory()
export const AppWrapper = ({ history = browserHistory, children }: AppWrapperProps): JSX.Element => (
  <Router history={history}>
    {children}
  </Router>
)

export const AppContent = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/photos/:photoSlug">
        <ImageDetails/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  )
}
