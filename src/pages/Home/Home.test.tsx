import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import { faultyEndpoints, setupTestRenderer, waitOneTick } from 'test-utils'
import getLatest from 'contract/samples/get-latest'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

import Home from './Home'

const scrollToBottom = (): void => {
  // Yes this is relying on implementation details,
  // but there is not other way
  document.querySelectorAll('img').forEach((img) => {
    Object.defineProperty(img, 'complete', { value: true })
  })
  // @ts-expect-error
  window.scrollY = document.body.scrollHeight - window.innerHeight
  document.dispatchEvent(new Event('scroll'))
}

const expectPages = async (pageCount: number): Promise<void> => {
  await waitFor(() => {
    const sum = (a: number, b: number): number => a + b
    const total = getLatest.success.pages.slice(0, pageCount).map(i => i.response.length).reduce(sum, 0)
    expect(document.querySelectorAll('img').length >= total).toEqual(true)
  })
}

test('continuously renders images', async () => {
  const [RenderTest, history] = setupTestRenderer()
  render(<RenderTest><Home/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/')
  expect(document.title).toBe('1.9 million+ Stunning Free Images to Use Anywhere - Pixabay')
  await waitFor(() => {
    const hero = screen.getByAltText(/City Shanghai China/i)
    expect(hero).toBeInTheDocument()
  })
  await expectPages(1)
  act(scrollToBottom)
  await expectPages(2)
  act(scrollToBottom)
  await expectPages(3)
})

test('handles error and retry graciously', async () => {
  faultyEndpoints.on()
  const [RenderTest, history] = setupTestRenderer()
  render(<RenderTest><Home/></RenderTest>)
  await waitOneTick()
  expect(history.location.pathname).toEqual('/')
  expect(document.title).toBe('1.9 million+ Stunning Free Images to Use Anywhere - Pixabay')
  await expectPages(0)
  faultyEndpoints.off()
  const errors = screen.getAllByText(/Error. Try Again/i)
  expect(errors.length).toEqual(2)
  userEvent.click(errors[0], { button: 0 })
  userEvent.click(errors[1], { button: 0 })
  await expectPages(1)
  act(scrollToBottom)
  await expectPages(2)
  act(scrollToBottom)
  await expectPages(3)
})
