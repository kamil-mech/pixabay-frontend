import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, expectOrder, waitOneTick } from 'test-utils'

import Button from './Button'

test('renders content', async () => {
  const [RenderTest] = setupTestRenderer()
  const Icon = (): JSX.Element => (
    <React.Fragment>
      <span />
      <span>Icon</span>
      <span />
    </React.Fragment>
  )
  render(<RenderTest>
    <Button frontAdornment={<Icon />} backAdornment={<Icon />}>
      Click Me
    </Button>
  </RenderTest>)
  await waitOneTick()
  expectOrder(screen, [
    'Icon',
    'Click Me',
    'Icon'
  ])
})
