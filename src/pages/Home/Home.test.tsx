import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, waitOneTick } from 'test-utils'

import Home from './Home'

test('renders home content', async () => {
  const [RenderTest, history] = setupTestRenderer()
  render(<RenderTest><Home/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/')
  expect(screen.getByText(/Hello world/i)).toBeInTheDocument()
})
