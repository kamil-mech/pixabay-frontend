import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import getSingle from 'contract/samples/get-single'

import SizedImage from './SizedImage'

const meta: Meta = {
  title: 'Molecules/SizedImage',
  component: SizedImage
}
export default meta

export const Default = (): JSX.Element => <SizedImage imageDetails={getSingle.success.response[0]} />
