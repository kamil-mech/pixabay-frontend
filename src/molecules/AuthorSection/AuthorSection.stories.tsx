import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import getSingle from 'contract/samples/get-single'

import AuthorSection from './AuthorSection'

const meta: Meta = {
  title: 'Molecules/AuthorSection',
  component: AuthorSection
}
export default meta

export const Default = (): JSX.Element => <AuthorSection imageDetails={getSingle.success.response[0]} />
