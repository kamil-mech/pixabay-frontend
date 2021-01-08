import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, expectOrder, waitOneTick } from 'test-utils'
import getSingle from 'contract/samples/get-single'

import SocialActions from './SocialActions'

test('renders button counters', async () => {
  const [RenderTest] = setupTestRenderer()
  render(<RenderTest><SocialActions imageDetails={getSingle.success.response[0]}/></RenderTest>)
  await waitOneTick()
  expectOrder(screen, [
    '15',
    '11'
  ])
})
