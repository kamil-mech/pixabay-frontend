import React from 'react'
import { useTranslation } from 'react-i18next'

import HomeLayout from 'templates/HomeLayout'

const NotFound = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <HomeLayout>
      {t('page-not-found')}
    </HomeLayout>
  )
}

export default NotFound
