import React from 'react'
import { render, screen } from '@testing-library/react'
import { setupTestRenderer, waitOneTick } from 'test-utils'

import Text from './Text'

for (const tag of ['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']) {
  test(`renders ${tag ?? 'default'}`, async () => {
    const props: Record<string, boolean> = {}
    if (tag) props[tag] = true
    const [RenderTest] = setupTestRenderer()
    render(<RenderTest><Text {...props}>Foo</Text></RenderTest>)
    await waitOneTick()
    expect(screen.getByText(/Foo/i)).toBeInTheDocument()
  })
}
