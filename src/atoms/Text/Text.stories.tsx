import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import styled, { useTheme } from 'styled-components'

import Text from './Text'

const meta: Meta = {
  title: 'Atoms/Text',
  component: Text
}
export default meta

const phrase = 'The quick brown fox jumps over the lazy dog'

export const Typography = (): JSX.Element => {
  return (
    <React.Fragment>
      <Text h1>{'h1: ' + phrase}</Text>
      <Text h2>{'h2: ' + phrase}</Text>
      <Text h3>{'h3: ' + phrase}</Text>
      <Text h4>{'h4: ' + phrase}</Text>
      <Text h5>{'h5: ' + phrase}</Text>
      <Text h6>{'h6: ' + phrase}</Text>
      <Text>{'Body text: ' + phrase}</Text>
      <Text sub>{'Sub text: ' + phrase}</Text>
    </React.Fragment>
  )
}

const Background = styled.div`
  background-color: lightgrey;
`
export const Palette = (): JSX.Element => {
  const palette = useTheme().palette
  return (
    <Background>
      {Object.keys(palette).map((color) =>
        <Text h4 color={palette[color as keyof typeof palette]}>{`color=${color}: ` + phrase}</Text>
      )}
    </Background>
  )
}
