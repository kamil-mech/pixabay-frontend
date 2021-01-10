import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import Header from './Header'

const meta: Meta = {
  title: 'Molecules/Header',
  component: Header
}
export default meta

export const Default = (): JSX.Element => <Header />
