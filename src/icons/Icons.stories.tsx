import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import Logo from './Logo'
import CaretIcon from './CaretIcon'
import UploadIcon from './Upload'

const meta: Meta = {
  title: 'atoms/Icons'
}
export default meta

const Background = styled.div`
  background-color: lightblue;
  width: 600px;
  height: 150vh;
`
const Track = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > * + * {
    margin-left: 8px;
  }
`
export const Default = (): JSX.Element => (
  <Background>
    <Track>
      <Logo />
      <UploadIcon />
      <CaretIcon />
    </Track>
  </Background>
)
