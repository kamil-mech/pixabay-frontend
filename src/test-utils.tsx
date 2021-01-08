
import React from 'react'
import { History, createMemoryHistory } from 'history'
import { Redirect, Route } from 'react-router-dom'
import { AppWrapper } from 'App'
import { Screen, waitFor } from '@testing-library/dom'
import { rest } from 'msw'
import getSingle from 'contract/samples/get-single'

import enTranslation from '../public/locales/en/translation.json'

interface TestRendererProps {
  url?: string
  route?: string
}
type RenderOutput = [React.FC, History]
export const setupTestRenderer = (props?: TestRendererProps): RenderOutput => {
  const memoryHistory = createMemoryHistory()
  const RenderTest: React.FC = ({ children }) => (
    <AppWrapper history={memoryHistory}>
      {memoryHistory.location.pathname === '/' && props?.url
        ? <Redirect to={props.url} />
        : null}
      {props?.route
        ? <Route exact path={props?.route ?? '/'}>
          {children}
        </Route> : children
      }
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

interface ExpectOrderOptions {
  caseSensitive: boolean
}
// FIXME: handle tricky &nbsp cases
export const expectOrder = (screen: Screen, arr: string[], options?: ExpectOrderOptions | undefined): void => {
  const regex = new RegExp(arr.join('|'), options?.caseSensitive ? '' : 'i')
  expect(screen.getAllByText(regex).map(item => item.textContent)).toEqual(arr)
}

// https://kentcdodds.com/blog/stop-mocking-fetch
let simulateFaultyAPI = false
export const faultyEndpoints = {
  on: () => {
    simulateFaultyAPI = true
  },
  off: () => {
    simulateFaultyAPI = false
  }
}
export const mockedAPIs = [
  // Used by jsdom unit tests
  rest.get('/locales/en/translation.json', async (req, res, ctx) => {
    return await res(ctx.json(enTranslation))
  }),
  rest.get('/api', async (req, res, ctx) => {
    const endPoints = [
      getSingle.success,
      getSingle.error
    ]
    for (const endpoint of endPoints) {
      if (req.url.toString().includes(endpoint.request.url)) {
        if (simulateFaultyAPI) throw endpoint.faultyResponse
        if (endpoint.response instanceof Error) {
          throw endpoint.response
        }
        return await res(ctx.json(endpoint.response))
      }
    }
    throw new Error('unexpected case')
  })
  // This seems to not be needed anymore
  // Perhaps it stopped being relevant when we downgraded to msw 0.24
  // Will keep it here for now and remove as needed
  // rest.get('*', async (req, res, ctx) => {
  //   // We are using a bailout header to avoid an infinite loop
  //   // This is likely an issue with the library
  //   // window.originalFetch is defined in
  //   // .storybook/preview and src/setupTests
  //   // @ts-expect-error
  //   const fRes = await window.originalFetch(req.url, {
  //     headers: new Headers([
  //       ['x-msw-bypass', 'true']
  //     ])
  //   })
  //   const buffer = await fRes.arrayBuffer()
  //   return await res(ctx.body(buffer))
  // })
]
