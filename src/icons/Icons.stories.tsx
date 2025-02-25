import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import Logo from './Logo'
import CaretIcon from './CaretIcon'
import UploadIcon from './UploadIcon'
import BurgerIcon from './BurgerIcon'
import ShareIcon from './ShareIcon'
import LikeIcon from './LikeIcon'
import StarIcon from './StarIcon'
import DownloadIcon from './DownloadIcon'
import EditorsChoiceIcon from './EditorsChoiceIcon'
import ReportIcon from './ReportIcon'

const meta: Meta = {
  title: 'atoms/Icons'
}
export default meta

const Background = styled.div`
  background-color: lightblue;
  width: 600px;
  height: 150vh;
`
const Track = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > * + * {
    margin: 8px;
  }
`
export const Default = (): JSX.Element => (
  <Background>
    <Track>
      <Logo />
      <UploadIcon />
      <DownloadIcon />
      <CaretIcon />
      <BurgerIcon />
      <ShareIcon />
      <LikeIcon />
      <StarIcon />
      <EditorsChoiceIcon />
      <ReportIcon />
    </Track>
  </Background>
)
