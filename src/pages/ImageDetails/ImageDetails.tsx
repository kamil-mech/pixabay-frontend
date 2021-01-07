import React from 'react'
import { useTranslation } from 'react-i18next'

import Text from 'atoms/Text'
import HomeLayout from 'templates/HomeLayout'

const ImageDetails = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <HomeLayout>
      <Text>
        {t('image-description')}
      </Text>
    </HomeLayout>
  )
}

export default ImageDetails
