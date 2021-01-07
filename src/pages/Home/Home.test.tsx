import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, waitOneTick } from 'test-utils'

import Home from './Home'

test('renders home content', async () => {
  const [RenderTest, history] = setupTestRenderer()
  render(<RenderTest><Home/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/')
  expect(screen.getByText(/See Sample Image/i)).toBeInTheDocument()
  expect(document.title).toBe('1.9 million+ Stunning Free Images to Use Anywhere - Pixabay')
})
