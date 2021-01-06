
import React from 'react'
import { History, createMemoryHistory } from 'history'
import { Redirect } from 'react-router-dom'
import { AppWrapper } from 'App'
import { waitFor } from '@testing-library/dom'
import { rest } from 'msw'

import enTranslation from '../public/locales/en/translation.json'

interface TestRendererProps {
  url: string
}
type RenderOutput = [React.FC, History]
export const setupTestRenderer = (props?: TestRendererProps): RenderOutput => {
  const memoryHistory = createMemoryHistory()
  const RenderTest: React.FC = ({ children }) => (
    <AppWrapper history={memoryHistory}>
      {memoryHistory.location.pathname === '/' && props?.url
        ? <Redirect to={props.url} />
        : null}
      {children}
    </AppWrapper>
  )
  return [RenderTest, memoryHistory]
}

// Used to catch side effects like initializing async store
export const waitOneTick = async (): Promise<void> => {
  let ready = false
  setTimeout(() => {
    ready = true
  }, 1)
  await waitFor(() => {
    expect(ready).toBe(true)
  })
}

// https://kentcdodds.com/blog/stop-mocking-fetch
export const mockedAPIs = [
  rest.get('/locales/en/translation.json', async (req, res, ctx) => {
    return await res(ctx.json(enTranslation))
  }),
  rest.get('*', async (req, res, ctx) => {
    console.log('intercepted', req)
    return await res(ctx.json(enTranslation))
  })
]
