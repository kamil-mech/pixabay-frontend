import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import getSingle from 'contract/samples/get-single'
import styled from 'styled-components'

import AuthorSection from './AuthorSection'

const meta: Meta = {
  title: 'Molecules/AuthorSection',
  component: AuthorSection
}
export default meta

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
  }
`

export const Default = (): JSX.Element => (
  <Wrapper>
    <div>Populated:</div>
    <AuthorSection imageDetails={getSingle.success.response[0]} />
    <div>Fallback:</div>
    <AuthorSection imageDetails={{ ...getSingle.success.response[0], userImageURL: '' }} />
  </Wrapper>
)
