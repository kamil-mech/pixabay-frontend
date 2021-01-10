import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import UploadIcon from 'icons/UploadIcon'

import Button from './Button'

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button
}
export default meta

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
  }
`
export const Default = (): JSX.Element => {
  return (
    <Wrapper>
      <Column>
        <div>
        Color variant: Primary
          <Button>Upload</Button>
        </div>
        <div>
        Color variant: Secondary
          <Button secondary>Upload</Button>
        </div>
        <div>
        Color variant: Tertiary
          <Button tertiary>Upload</Button>
        </div>
        <div>
        Color variant: Outlined
          <Button outlined>Upload</Button>
        </div>
      </Column>
      <Column>
        <div>
        Size variant: Small
          <Button small>Upload</Button>
        </div>
        <div>
        Size variant: Large
          <Button large>Upload</Button>
        </div>
        <div>
        Text variant: Bold
          <Button bold>Upload</Button>
        </div>
      </Column>
      <Column>
        <div>
        Front Adornment:
          <Button frontAdornment={<UploadIcon />}>Upload</Button>
        </div>
        <div>
        Background Adornment:
          <Button backAdornment={<UploadIcon />}>Upload</Button>
        </div>
      </Column>
    </Wrapper>
  )
}
