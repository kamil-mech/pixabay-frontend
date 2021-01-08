import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, expectOrder, waitOneTick } from 'test-utils'

import Home from './Home'

test('renders home content', async () => {
  const [RenderTest, history] = setupTestRenderer()
  render(<RenderTest><Home/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/')
  expectOrder(screen, [
    'See sample image',
    'See sample image',
    'See sample image'
  ])
  expect(document.title).toBe('1.9 million+ Stunning Free Images to Use Anywhere - Pixabay')
})
