import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { setupTestRenderer, waitOneTick } from 'test-utils'
import getSingle from 'contract/samples/get-single'

import { AppContent } from './App'

test('renders home page', async () => {
  const [RenderTest, history] = setupTestRenderer()
  render(<RenderTest><AppContent/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/')
  await waitFor(() => {
    expect(document.title).toBe('1.9 million+ Stunning Free Images to Use Anywhere - Pixabay')
  })
})

test('renders image details page', async () => {
  const [RenderTest, history] = setupTestRenderer({
    url: getSingle.success.webUrl,
    route: getSingle.webRoute
  })
  render(<RenderTest><AppContent/> </RenderTest>)
  expect(history.location.pathname).toEqual(getSingle.success.webUrl)
  await waitOneTick()
  await waitFor(() => {
    expect(document.title).toBe('Buddha Statue Monument')
  })
})

test('renders not found page', async () => {
  const [RenderTest, history] = setupTestRenderer({ url: '/nowhere' })
  render(<RenderTest><AppContent/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/nowhere')
  await waitFor(() => {
    expect(document.title).toBe('Error 404')
  })
})
