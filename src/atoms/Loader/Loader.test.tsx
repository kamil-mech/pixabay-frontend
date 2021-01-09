import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, waitOneTick } from 'test-utils'
import userEvent from '@testing-library/user-event'

import Loader from './Loader'

test('renders loading spinner', async () => {
  const [RenderTest] = setupTestRenderer()
  const props = {
    error: null,
    loading: true,
    retry: () => {}
  }
  render(<RenderTest><Loader {...props}>Foo</Loader></RenderTest>)
  await waitOneTick()
  expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument()
})

test('handles error with retry', async () => {
  const [RenderTest] = setupTestRenderer()
  const props = {
    error: new Error('Failed to fetch'),
    loading: false,
    retry: jest.fn()
  }
  render(<RenderTest><Loader {...props}>Foo</Loader></RenderTest>)
  await waitOneTick()
  const retryButton = screen.getByText(/Error. Try Again/i)
  expect(retryButton).toBeInTheDocument()
  userEvent.click(retryButton, { button: 0 })
  expect(props.retry).toHaveBeenCalled()
})

test('handles success', async () => {
  const [RenderTest] = setupTestRenderer()
  const props = {
    error: null,
    loading: false,
    retry: jest.fn()
  }
  render(<RenderTest><Loader {...props}>Foo</Loader></RenderTest>)
  await waitOneTick()
  expect(screen.getByText(/Foo/i)).toBeInTheDocument()
})
