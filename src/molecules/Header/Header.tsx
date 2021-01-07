import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import Logo from 'icons/Logo'
import UploadIcon from 'icons/Upload'
import CaretIcon from 'icons/CaretIcon'
import Text from 'atoms/Text'
import Button from 'atoms/Button'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  box-shadow: 0 0 60px rgba(0,0,0,.12);
  padding: ${({ theme }) => theme.spacing(2)}px;
  justify-content: space-between;
  > * {
    margin-bottom: 1px;
  }
`

const StyledHeaderTabs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 3px;
  > * + * {
    margin-left: calc(${({ theme }) => theme.spacing(4)}px + 2px);
  }
`
const HeaderTabs = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <StyledHeaderTabs>
      <div>
        <Text>{t('photos')}</Text>
      </div>
      <div>
        <Text>{t('illustrations')}</Text>
      </div>
      <div>
        <Text>{t('vectors')}</Text>
      </div>
      <div>
        <Text>{t('videos')}</Text>
      </div>
      <div>
        <Text>{t('music')}</Text>
      </div>
    </StyledHeaderTabs>
  )
}

const StyledHeaderActions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 4px;
  > * + * {
    margin-left: calc(${({ theme }) => theme.spacing(2)}px + 2px);
  }
`
const ActionSeparator = styled.div`
  width: 1px;
  height: 125%;
  background-color: ${({ theme }) => theme.palette.tertiary};
`
const AccountSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(1)}px;
  margin-right: 2px;
  > * + * {
    margin-left: calc(${({ theme }) => theme.spacing(2)}px - 1px);
  }
`
const ExploreDropdown = styled.div`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: calc(${({ theme }) => theme.spacing(1)}px + 1px);
  }
`
const HeaderActions = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <StyledHeaderActions>
      <ExploreDropdown>
        <Text>{t('explore')}</Text>
        <CaretIcon/>
      </ExploreDropdown>
      <AccountSection>
        <div>
          <Text>{t('log-in')}</Text>
        </div>
        <ActionSeparator/>
        <div>
          <Text>{t('join')}</Text>
        </div>
      </AccountSection>
      <Button frontAdornment={<UploadIcon/>}>
        {t('upload')}
      </Button>
    </StyledHeaderActions>
  )
}

const StyledHeaderSide = styled.div`
  display: flex;
  flex-direction: row;
`

const Gap = styled.div`
  width: ${({ theme }) => theme.spacing(6)}px;
  height: 100%;
  flex-shrink: 0;
`

const Header: React.FC = ({ children }): JSX.Element => {
  return (
    <HeaderWrapper>
      <StyledHeaderSide>
        <Logo/>
        <Gap/>
        <HeaderTabs />
      </StyledHeaderSide>
      <StyledHeaderSide>
        <HeaderActions/>
      </StyledHeaderSide>
    </HeaderWrapper>
  )
}

export default Header
