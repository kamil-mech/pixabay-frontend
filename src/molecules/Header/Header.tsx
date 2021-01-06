import React from 'react'
import { useTranslation } from 'react-i18next'

import Logo from 'atoms/Logo'

const HeaderTabs = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div>
      <span>
        <span>{t('photos')}</span>
      </span>
      <span>
        <span>{t('illustrations')}</span>
      </span>
      <span>
        <span>{t('vectors')}</span>
      </span>
      <span>
        <span>{t('videos')}</span>
      </span>
      <span>
        <span>{t('music')}</span>
      </span>
    </div>
  )
}

const HeaderActions = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div>
      <span>
        <span>{t('explore')}</span>
      </span>
      <span>
        <span>{t('log-in')}</span>
      </span>
      <span>
        <span>{t('join')}</span>
      </span>
      <span>
        <button>{t('upload')}</button>
      </span>
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
