import React from 'react'
import { render, screen } from '@testing-library/react'
import { waitOneTick } from 'test-utils'

import App from './App'

test('renders hello world', async () => {
  render(<App />)
  await waitOneTick()
  const linkElement = screen.getByText(/Hello world/i)
  expect(linkElement).toBeInTheDocument()
})
