import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, expectOrder, waitOneTick } from 'test-utils'
import userEvent from '@testing-library/user-event'

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
  const handleClick = jest.fn()
  render(<RenderTest>
    <Button onClick={handleClick} frontAdornment={<Icon />} backAdornment={<Icon />}>
      Click Me
    </Button>
  </RenderTest>)
  await waitOneTick()
  expectOrder(screen, [
    'Icon',
    'Click Me',
    'Icon'
  ])
  userEvent.click(screen.getByText(/Click me/i), { button: 0 })
  expect(handleClick).toHaveBeenCalled()
})
