import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ImageDetails } from 'store/useImageDetailStore'
import Button from 'atoms/Button'
import Text from 'atoms/Text'

const lightOnHover = `
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`
const AnimatedLink = styled(Text)`
  ${lightOnHover}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
  ${({ theme }) => theme.breakpoints.lgDown} {
    justify-content: center;
  }
`
const Avatar = styled.img`
  ${lightOnHover}
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

const AuthorButtonRow = styled.div`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
`
const AuthorActionables = styled.div`
  margin-top: -2px;
`

interface AuthorSectionProps {
  imageDetails: ImageDetails
}
const AuthorSection = ({ imageDetails }: AuthorSectionProps): JSX.Element => {
  const palette = useTheme().palette
  const { t } = useTranslation()
  const { userImageURL, user, user_id: userId } = imageDetails
  return (
    <Wrapper>
      <Avatar src={userImageURL} />
      <AuthorActionables>
        <Link to={`/users/${user}-${userId}`}>
          <AnimatedLink h6 color={palette.darkEmphasis}>
            {`${user ?? ''}`}
          </AnimatedLink>
        </Link>
        <AuthorButtonRow>
          <Button small>{t('coffee')}</Button>
          <Button small tertiary>{t('follow')}</Button>
        </AuthorButtonRow>
      </AuthorActionables>
    </Wrapper>
  )
}

export default AuthorSection
