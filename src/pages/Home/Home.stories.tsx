import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import Home from './Home'

const meta: Meta = {
  title: 'Pages/Home',
  component: Home
}
export default meta

export const Default = (): JSX.Element => <Home />
