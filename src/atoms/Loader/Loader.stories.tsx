import React, { useState } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import Loader from './Loader'

const meta: Meta = {
  title: 'Atoms/Loader',
  component: Loader
}
export default meta

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: 16px;
  }
`
export const Default = (): JSX.Element => {
  const s1 = { loading: true, error: null, retry: () => {} }
  const [s2, setS2] = useState({ loading: false, error: new Error('Failed to fetch') })
  // @ts-expect-error
  s2.retry = () => {
    // @ts-expect-error
    setS2(s1)
    // @ts-expect-error
    setTimeout(() => setS2(s3), 200)
  }
  const s3 = { loading: false, error: null, retry: () => {} }
  return (
    <Wrapper>
      <div>
        <div>Loading:</div>
        <Loader {...s1}>Content</Loader>
      </div>
      <div>
        <div>Error with Retry:</div>
        {
          // @ts-expect-error
          <Loader {...s2}>Content</Loader>
        }
      </div>
      <div>
        <div>Success:</div>
        <Loader {...s3}>Content</Loader>
      </div>
    </Wrapper>
  )
}
