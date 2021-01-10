import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, expectOrder, waitOneTick } from 'test-utils'
import getSingle from 'contract/samples/get-single'
import userEvent from '@testing-library/user-event'

import SizedImage from './SizedImage'

test('renders image with overlay', async () => {
  const [RenderTest] = setupTestRenderer()
  render(<RenderTest><SizedImage imageDetails={getSingle.success.response[0]}/></RenderTest>)
  await waitOneTick()
  expect(screen.getByAltText('Buddha Statue Monument')).toBeInTheDocument()
  expectOrder(screen, [
    'Buddha',
    'Statue',
    'Monument'
  ])
})

test('renders overlay on load but hides it after first hover', async () => {
  const [RenderTest] = setupTestRenderer()
  render(<RenderTest><SizedImage imageDetails={getSingle.success.response[0]}/></RenderTest>)
  await waitOneTick()
  const overlay = screen.getByTestId('overlay')
  expect(overlay.style.opacity).toEqual('1')
  userEvent.hover(overlay)
  expect(overlay.style.opacity).toEqual('1')
  userEvent.unhover(overlay)
  expect(overlay.style.opacity).toEqual('')
})
