import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { setupTestRenderer, expectOrder, faultyEndpoints, waitOneTick } from 'test-utils'
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
    // Image
    expect(screen.getByAltText(/Buddha Statue Monument/i)).toBeInTheDocument()
    // Overlay
    expectOrder(screen, [
      'Buddha', 'Statue', 'Monument'
    ], { caseSensitive: true })

    expect(screen.getByText(/Sponsored Images iStock/i)).toBeInTheDocument()
    expect(screen.getByText(/LIMITED DEAL: 20% off with/i)).toBeInTheDocument()
    expect(screen.getByText(/PIXABAY20/i)).toBeInTheDocument()
    expect(screen.getByText(/coupon/i)).toBeInTheDocument()
    expect(screen.getByText(/2 comments/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
    expect(screen.getByText(/to leave a comment/i)).toBeInTheDocument()
    // Tokens
    expectOrder(screen, [
      'buddha', 'statue', 'monument'
    ], { caseSensitive: true })

    // Sidebar
    expectOrder(screen, [
      'travelphotographer',
      'Coffee', 'Follow',
      // Likes and stars
      '15', '11',
      'Free Download',
      'Pixabay License',
      'Free for commercial use',
      'No attribution required',
      'Like Pixabay on Facebook',
      'Related Images',
      'Image Type', 'JPG',
      'Resolution', '3264x4928',
      'Views', '4423',
      'Downloads', '2641'
    ])

    expect(document.title).toBe('Buddha Statue Monument')
  })
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
    // Image
    expect(screen.getByAltText(/Buddha Statue Monument/i)).toBeInTheDocument()
    // Overlay
    expectOrder(screen, [
      'Buddha', 'Statue', 'Monument'
    ], { caseSensitive: true })
    expect(screen.getByText(/Sponsored Images iStock/i)).toBeInTheDocument()
    expect(screen.getByText(/LIMITED DEAL: 20% off with/i)).toBeInTheDocument()
    expect(screen.getByText(/PIXABAY20/i)).toBeInTheDocument()
    expect(screen.getByText(/coupon/i)).toBeInTheDocument()
    expect(screen.getByText(/2 comments/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
    expect(screen.getByText(/to leave a comment/i)).toBeInTheDocument()
    // Tokens
    expectOrder(screen, [
      'buddha', 'statue', 'monument'
    ], { caseSensitive: true })

    // Sidebar
    expectOrder(screen, [
      'travelphotographer',
      'Coffee', 'Follow',
      // Likes and stars
      '15', '11',
      'Free Download',
      'Pixabay License',
      'Free for commercial use',
      'No attribution required',
      'Like Pixabay on Facebook',
      'Related Images',
      'Image Type', 'JPG',
      'Resolution', '3264x4928',
      'Views', '4423',
      'Downloads', '2641'
    ])
  })
  expect(document.title).toBe('Buddha Statue Monument')
})

test('filters out self from related and sponsored images', async () => {
  const [RenderTest] = setupTestRenderer({
    url: getSingle.success.webUrl,
    route: getSingle.webRoute
  })
  render(<RenderTest><ImageDetails/> </RenderTest>)
  await waitFor(() => {
    expect(screen.queryByText(/Loading\.\.\./i)).toBeNull()
  })
  const all = screen.getAllByAltText('Buddha Statue Monument')
  expect(all.length).toEqual(1)
})
