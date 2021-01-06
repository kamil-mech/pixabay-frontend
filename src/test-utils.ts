
import { rest } from 'msw'
import { waitFor } from '@testing-library/dom'

import enTranslation from '../public/locales/en/translation.json'

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
