import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, expectOrder, waitOneTick } from 'test-utils'
import getSingle from 'contract/samples/get-single'

import AuthorSection from './AuthorSection'

test('renders tabs', async () => {
  const [RenderTest] = setupTestRenderer()
  render(<RenderTest><AuthorSection imageDetails={getSingle.success.response[0]}/></RenderTest>)
  await waitOneTick()
  expectOrder(screen, [
    'travelphotographer',
    'Coffee',
    'Follow'
  ])
})
