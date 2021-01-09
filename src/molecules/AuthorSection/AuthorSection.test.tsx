import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, expectOrder, waitOneTick } from 'test-utils'
import getSingle from 'contract/samples/get-single'

import AuthorSection, { fallbackImage } from './AuthorSection'

test('renders author section', async () => {
  const [RenderTest] = setupTestRenderer()
  render(<RenderTest><AuthorSection imageDetails={getSingle.success.response[0]}/></RenderTest>)
  await waitOneTick()
  expectOrder(screen, [
    'travelphotographer',
    'Coffee',
    'Follow'
  ])
})

test('renders fallback image', async () => {
  const [RenderTest] = setupTestRenderer()
  const imageDetails = { ...getSingle.success.response[0] }
  imageDetails.userImageURL = ''
  render(<RenderTest><AuthorSection imageDetails={imageDetails}/></RenderTest>)
  screen.getByAltText(imageDetails.user).dispatchEvent(new Event('error'))
  await waitOneTick()
  expect(screen.getByAltText(imageDetails.user).getAttribute('src')).toEqual(fallbackImage)
})
