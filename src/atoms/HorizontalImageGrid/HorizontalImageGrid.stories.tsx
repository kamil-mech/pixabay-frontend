import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import { randomImage } from 'contract/samples/utils'

import { ImageDetails } from 'store/useImageDetailStore'

import HorizontalImageGrid from './HorizontalImageGrid'

const meta: Meta = {
  title: 'Atoms/HorizontalImageGrid',
  component: HorizontalImageGrid
}
export default meta

const randomImages = new Array(100).fill('').map(() => randomImage(true) as ImageDetails)

export const Default = (): JSX.Element | string => {
  return <HorizontalImageGrid images={randomImages} thresholdHeight={160} />
}
