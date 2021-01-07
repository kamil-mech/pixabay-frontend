import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { setupTestRenderer, faultyEndpoints } from 'test-utils'
import getSingle from 'contract/samples/get-single'
import userEvent from '@testing-library/user-event'

import ImageDetails from './ImageDetails'

test('renders image details content', async () => {
  const [RenderTest, history] = setupTestRenderer({
    url: getSingle.success.webUrl,
    route: getSingle.webRoute
  })
  render(<RenderTest><ImageDetails/> </RenderTest>)
  expect(history.location.pathname).toEqual(getSingle.success.webUrl)
  await waitFor(() => {
    expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument()
  })
  await waitFor(() => {
    expect(screen.getByText(/Buddha Statue Monument/i)).toBeInTheDocument()
    expect(screen.getByText(/By travelphotographer/i)).toBeInTheDocument()
  })
  expect(document.title).toBe('Buddha Statue Monument')
})

test('handles fetch error gracefully', async () => {
  const [RenderTest, history] = setupTestRenderer({
    url: getSingle.error.webUrl,
    route: getSingle.webRoute
  })
  render(<RenderTest><ImageDetails/> </RenderTest>)
  expect(history.location.pathname).toEqual(getSingle.error.webUrl)
  await waitFor(() => {
    expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument()
  })
  await waitFor(() => {
    expect(screen.getByText(/Error. Try Again/i)).toBeInTheDocument()
  })
})

test('handles retry', async () => {
  faultyEndpoints.on()
  const [RenderTest, history] = setupTestRenderer({
    url: getSingle.success.webUrl,
    route: getSingle.webRoute
  })
  render(<RenderTest><ImageDetails/> </RenderTest>)
  expect(history.location.pathname).toEqual(getSingle.success.webUrl)
  await waitFor(() => {
    expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument()
  })
  const retryButton = screen.getByText(/Error. Try Again/i)
  await waitFor(() => {
    expect(retryButton).toBeInTheDocument()
  })

  faultyEndpoints.off()
  userEvent.click(retryButton, { button: 0 })
  await waitFor(() => {
    expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument()
  })
  await waitFor(() => {
    expect(screen.getByText(/Buddha Statue Monument/i)).toBeInTheDocument()
    expect(screen.getByText(/By travelphotographer/i)).toBeInTheDocument()
  })
})
