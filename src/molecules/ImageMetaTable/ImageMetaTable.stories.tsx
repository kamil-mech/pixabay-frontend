import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import getSingle from 'contract/samples/get-single'
import styled from 'styled-components'

import ImageMetaTable from './ImageMetaTable'

const Wrapper = styled.div`
  width: 200px;
`

const meta: Meta = {
  title: 'Molecules/ImageMetaTable',
  component: ImageMetaTable
}
export default meta

export const Default = (): JSX.Element => <Wrapper><ImageMetaTable imageDetails={getSingle.success.response[0]} /></Wrapper>
