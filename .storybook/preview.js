import { setupTestRenderer, mockedAPIs } from 'test-utils'

import { setupWorker } from 'msw'
import { useEffect } from 'react'

// FIXME: HMR in storybook
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
