// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

import { setupServer } from 'msw/node'
import { mockedAPIs, faultyEndpoints } from 'test-utils'

import * as stores from 'store/registry'

// @ts-expect-error
window.originalFetch = window.fetch
const server = setupServer(...mockedAPIs)
beforeAll(() => server.listen())
beforeEach(() => {
  stores.reset()
  server.resetHandlers()
  faultyEndpoints.off()
})
afterAll(() => server.close())
