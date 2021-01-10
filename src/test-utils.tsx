
import React from 'react'
import { History, createMemoryHistory } from 'history'
import { Redirect, Route } from 'react-router-dom'
import { AppWrapper } from 'App'
import { Screen, waitFor } from '@testing-library/dom'
import { rest } from 'msw'
import getLatest from 'contract/samples/get-latest'
import getHeroImage from 'contract/samples/get-hero-image'
import getSingle from 'contract/samples/get-single'
import getRelated from 'contract/samples/get-related'
import getRelatedSponsored from 'contract/samples/get-related-sponsored'

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
// or loading translations
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
const faultyResponse = new Error('Request failed with status code 404')
export const mockedAPIs = [
  // Used by jsdom unit tests
  rest.get('/locales/en/translation.json', async (req, res, ctx) => {
    return await res(ctx.json(enTranslation))
  }),
  rest.get('/api', async (req, res, ctx) => {
    const endPoints = [
      getHeroImage.success,
      getHeroImage.error,
      ...getLatest.success.pages,
      getLatest.error,
      getSingle.success,
      getSingle.error,
      getRelated.success,
      getRelated.error,
      getRelatedSponsored.success,
      getRelatedSponsored.error
    ]
    for (const endpoint of endPoints) {
      if (req.url.toString().includes(endpoint.request.url)) {
        if (simulateFaultyAPI) throw faultyResponse
        if (endpoint.response instanceof Error) {
          throw endpoint.response
        }
        return await res(ctx.json(endpoint.response))
      }
    }
    throw new Error('unexpected case: ' + req.url.toString())
  })
]
