import React, { ReactNode } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { History, createBrowserHistory } from 'history'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import getSingle from 'contract/samples/get-single'
import getLatest from 'contract/samples/get-latest'

import Home from 'pages/Home'
import ImageDetails from 'pages/ImageDetails'
import NotFound from 'pages/NotFound'

import theme from './theme'

import './i18n'

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  @font-face {
    font-family: "Open Sans";
    src: url("mem8YaGs126MiZpBA-UFVZ0b.woff2");
  }
  @font-face {
    font-family: "Open Sans Bold";
    src: url("mem5YaGs126MiZpBA-UN7rgOUuhp.woff2");
  }
`

// Wrapper is shared with unit tests and storybook
// This way we ensure they use the same providers and contexts
// as the real app
export interface AppWrapperProps {
  history?: History
  children: ReactNode
}
const browserHistory = createBrowserHistory()
export const AppWrapper = ({ history = browserHistory, children }: AppWrapperProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router history={history}>
      {children}
    </Router>
  </ThemeProvider>
)

declare global {
  interface AppMatch {
    photoSlug?: string
  }
}
export const AppContent = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={getSingle.webRoute}>
        <ImageDetails/>
      </Route>
      <Route exact path={getLatest.webRoute}>
        <Home/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  )
}
