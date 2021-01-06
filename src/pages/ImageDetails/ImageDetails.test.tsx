import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, waitOneTick } from 'test-utils'

import ImageDetails from './ImageDetails'

test('renders image details content', async () => {
  const url = '/photos/buddha-statue-monument-buddhism-5868759'
  const [RenderTest, history] = setupTestRenderer({ url })
  render(<RenderTest><ImageDetails/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual(url)
  expect(screen.getByText(/Image Description/i)).toBeInTheDocument()
})
