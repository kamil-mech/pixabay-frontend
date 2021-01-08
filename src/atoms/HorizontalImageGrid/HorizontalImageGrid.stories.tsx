import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import HorizontalImageGrid from './HorizontalImageGrid'

const meta: Meta = {
  title: 'Atoms/HorizontalImageGrid',
  component: HorizontalImageGrid
}
export default meta

const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomImages = new Array(100).fill('').map(() => {
  const width = getRandomIntInclusive(200, 800)
  const height = getRandomIntInclusive(200, 800)
  return {
    id: Date.now().toString() + Math.random().toString().slice(-8),
    width,
    height,
    src: `https://picsum.photos/${width}/${height}`
  }
})

export const Default = (): JSX.Element | string => {
  return <HorizontalImageGrid images={randomImages} thresholdHeight={160} />
}
