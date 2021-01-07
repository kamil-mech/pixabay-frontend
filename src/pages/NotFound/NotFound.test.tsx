import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, waitOneTick } from 'test-utils'

import NotFound from './NotFound'

test('renders not found content', async () => {
  const [RenderTest, history] = setupTestRenderer({ url: '/nowhere' })
  render(<RenderTest><NotFound/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/nowhere')
  expect(screen.getByText(/Sorry, the page you are looking for is missing/i)).toBeInTheDocument()
})
