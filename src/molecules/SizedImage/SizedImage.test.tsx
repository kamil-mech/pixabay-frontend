import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, expectOrder, waitOneTick } from 'test-utils'
import getSingle from 'contract/samples/get-single'

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
