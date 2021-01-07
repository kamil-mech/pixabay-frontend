import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import HomeLayout from './HomeLayout'

const meta: Meta = {
  title: 'Templates/HomeLayout',
  component: HomeLayout
}
export default meta

export const Default = (): JSX.Element => <HomeLayout>Page Content</HomeLayout>
