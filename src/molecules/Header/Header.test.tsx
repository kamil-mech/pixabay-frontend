import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, waitOneTick } from 'test-utils'

import Header from './Header'

test('renders tabs', async () => {
  const [RenderTest] = setupTestRenderer()
  render(<RenderTest><Header/></RenderTest>)
  await waitOneTick()
  const tabRegex = /Photos|Illustrations|Vectors|Videos|Music/gi
  const orderedTabs = screen.getAllByText(tabRegex).map(item => item.textContent)
  expect(orderedTabs).toEqual([
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
  const actionsRegex = /Explore|Log In|Join|Upload/gi
  const orderedActions = screen.getAllByText(actionsRegex).map(item => item.textContent)
  expect(orderedActions).toEqual([
    'Explore',
    'Log In',
    'Join',
    'Upload'
  ])
})
