import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, expectOrder, waitOneTick } from 'test-utils'

import Header from './Header'

test('renders tabs', async () => {
  const [RenderTest] = setupTestRenderer()
  render(<RenderTest><Header/></RenderTest>)
  await waitOneTick()
  expectOrder(screen, [
    'Photos',
    'Illustrations',
    'Vectors',
    'Videos',
    'Music'
  ])
})

test('renders actions', async () => {
  const [RenderTest] = setupTestRenderer()
  render(<RenderTest><Header/></RenderTest>)
  await waitOneTick()
  expectOrder(screen, [
    'Explore',
    'Log in',
    'Join',
    'Upload'
  ])
})
