import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, waitOneTick } from 'test-utils'
import getSingle from 'contract/samples/get-single'

import { AppContent } from './App'

test('renders home page', async () => {
  const [RenderTest, history] = setupTestRenderer()
  render(<RenderTest><AppContent/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/')
  expect(screen.getByText(/See Sample Image/i)).toBeInTheDocument()
})

test('renders image details page', async () => {
  const [RenderTest, history] = setupTestRenderer({
    url: getSingle.success.webUrl,
    route: getSingle.webRoute
  })
  render(<RenderTest><AppContent/> </RenderTest>)
  expect(history.location.pathname).toEqual(getSingle.success.webUrl)
  await waitOneTick()
  expect(screen.getByText(/Buddha Statue Monument/i)).toBeInTheDocument()
})

test('renders not found page', async () => {
  const [RenderTest, history] = setupTestRenderer({ url: '/nowhere' })
  render(<RenderTest><AppContent/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/nowhere')
  expect(screen.getByText(/Sorry, the page you are looking for is missing/i)).toBeInTheDocument()
})
