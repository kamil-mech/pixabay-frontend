import { setupTestRenderer, mockedAPIs } from 'test-utils'

import { setupWorker } from 'msw'
import { useEffect } from 'react'

const worker = setupWorker(...mockedAPIs)
window.worker = worker
let workerOnline = false

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const [RenderTest] = setupTestRenderer()

export const decorators = [
  (Story) => {
    useEffect(() => {
      if (!workerOnline) {
        workerOnline = true
        worker.start()
      }
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
