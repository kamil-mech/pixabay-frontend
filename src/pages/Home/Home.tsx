import React from 'react'
import { useTranslation } from 'react-i18next'

import HomeLayout from 'templates/HomeLayout'

const Home = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <HomeLayout>
      {t('hello-world')}
    </HomeLayout>
  )
}

export default Home
