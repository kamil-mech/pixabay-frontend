import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import NotFound from './NotFound'

const meta: Meta = {
  title: 'Pages/NotFound',
  component: NotFound
}
export default meta

export const Default = (): JSX.Element => <NotFound />
