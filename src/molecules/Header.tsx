import React from 'react'
import { useTranslation } from 'react-i18next'

import Logo from 'atoms/Logo'

const HeaderTabs = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div>
      <span>{t('photos')}</span>
      <span>{t('illustrations')}</span>
      <span>{t('vectors')}</span>
      <span>{t('videos')}</span>
      <span>{t('music')}</span>
    </div>
  )
}

const HeaderActions = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div>
      <span>{t('explore')}</span>
      <span>{t('log-in')}</span>
      <span>{t('join')}</span>
      <button>{t('upload')}</button>
    </div>
  )
}

const HomeLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <header>
      <Logo/>
      <HeaderTabs />
      <HeaderActions/>
    </header>
  )
}

export default HomeLayout
