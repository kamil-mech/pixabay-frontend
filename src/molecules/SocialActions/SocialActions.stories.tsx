import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import getSingle from 'contract/samples/get-single'

import SocialActions from './SocialActions'

const meta: Meta = {
  title: 'Molecules/SocialActions',
  component: SocialActions
}
export default meta

export const Default = (): JSX.Element => <SocialActions imageDetails={getSingle.success.response[0]} />
