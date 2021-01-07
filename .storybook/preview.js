import { setupTestRenderer, mockedAPIs } from 'test-utils'

import { setupWorker } from 'msw'
import React, { useEffect } from 'react'
import * as stores from 'store/registry'

const worker = setupWorker(...mockedAPIs)
worker.start()
window.worker = worker

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const [RenderTest] = setupTestRenderer()

export const decorators = [
  (Story) => {
    useEffect(() => {
      stores.reset()
      return () => {
        worker.resetHandlers()
      }
    }, [])
    return (
      <RenderTest>
        <Story/>
      </RenderTest>
      )
    }
]
