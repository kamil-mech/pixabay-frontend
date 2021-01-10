import { setupTestRenderer, mockedAPIs, faultyEndpoints } from 'test-utils'

import { setupWorker } from 'msw'
import React, { useEffect, useMemo } from 'react'
import * as stores from 'store/registry'

window.originalFetch = window.fetch
const worker = setupWorker(...mockedAPIs)
worker.start()
window.worker = worker

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story, context) => {
    const [RenderTest] = useMemo(() => setupTestRenderer({
      url: context.parameters?.url,
      route: context.parameters?.route
    }), [Story])
    useEffect(() => {
      stores.reset()
      return () => {
        worker.resetHandlers()
        faultyEndpoints.off()
      }
    }, [])
    return (
      <RenderTest>
        <Story/>
      </RenderTest>
      )
    }
]
