import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, waitOneTick } from 'test-utils'

import { AppContent } from './App'

test('renders home page', async () => {
  const [RenderTest, history] = setupTestRenderer()
  render(<RenderTest><AppContent/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/')
  expect(screen.getByText(/Hello world/i)).toBeInTheDocument()
})

test('renders image details page', async () => {
  const url = '/photos/buddha-statue-monument-buddhism-5868759'
  const [RenderTest, history] = setupTestRenderer({ url })
  render(<RenderTest><AppContent/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual(url)
  expect(screen.getByText(/Image Description/i)).toBeInTheDocument()
})

test('renders not found page', async () => {
  const [RenderTest, history] = setupTestRenderer({ url: '/nowhere' })
  render(<RenderTest><AppContent/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/nowhere')
  expect(screen.getByText(/Sorry, the page you are looking for is missing/i)).toBeInTheDocument()
})
