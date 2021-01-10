import React from 'react'
import styled from 'styled-components'

import Button from 'atoms/Button'
import LikeIcon from 'icons/LikeIcon'
import StarIcon from 'icons/StarIcon'
import ShareIcon from 'icons/ShareIcon'
import { ImageDetails } from 'store/useImageDetailStore'

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.palette.tertiary};
  border-left: 0;
  border-right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > * {
    flex: 1;
    max-width: 95px;
  }
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
`

interface SocialActionsProps {
  imageDetails: ImageDetails
}
const SocialActions = ({ imageDetails }: SocialActionsProps): JSX.Element => (
  <Wrapper>
    <Button small secondary bold frontAdornment={<LikeIcon/>}>{imageDetails.likes}</Button>
    <Button small secondary bold frontAdornment={<StarIcon/>}>{imageDetails.favorites}</Button>
    <Button small tertiary><ShareIcon/></Button>
  </Wrapper>
)

export default SocialActions
