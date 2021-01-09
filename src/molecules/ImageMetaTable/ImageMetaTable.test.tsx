import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, expectOrder, waitOneTick } from 'test-utils'
import getSingle from 'contract/samples/get-single'

import ImageMetaTable from './ImageMetaTable'

test.only('renders metadata', async () => {
  const [RenderTest] = setupTestRenderer()
  render(<RenderTest><ImageMetaTable imageDetails={getSingle.success.response[0]}></ImageMetaTable></RenderTest>)
  await waitOneTick()
  const { imageWidth, imageHeight } = getSingle.success.response[0]
  expectOrder(screen, [
    'Image Type', 'JPG',
    'Resolution', `${imageWidth}x${imageHeight}`,
    'Views', '4423',
    'Downloads', '2641'
  ])
})
