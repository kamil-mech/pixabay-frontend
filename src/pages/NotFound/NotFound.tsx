import React from 'react'
import { useTranslation } from 'react-i18next'

import Text from 'atoms/Text'
import HomeLayout from 'templates/HomeLayout'

const NotFound = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <HomeLayout>
      <Text>
        {t('page-not-found')}
      </Text>
    </HomeLayout>
  )
}

export default NotFound
