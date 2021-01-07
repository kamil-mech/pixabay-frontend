import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import UploadIcon from 'icons/Upload'

import Button from './Button'

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button
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
  return (
    <Wrapper>
      <div>
        Variant: Primary
        <Button>Upload</Button>
      </div>
      <div>
        Variant: Secondary
        <Button secondary>Upload</Button>
      </div>
      <div>
        Variant: Tertiary
        <Button tertiary>Upload</Button>
      </div>
      <div>
        Front Adornment:
        <Button frontAdornment={<UploadIcon />}>Upload</Button>
      </div>
      <div>
        Background Adornment:
        <Button backAdornment={<UploadIcon />}>Upload</Button>
      </div>
    </Wrapper>
  )
}
