import React from 'react'
import { useTranslation } from 'react-i18next'

import HomeLayout from 'templates/HomeLayout'

const ImageDetails = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <HomeLayout>
      {t('image-description')}
    </HomeLayout>
  )
}

export default ImageDetails
