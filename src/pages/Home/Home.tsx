import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import HomeLayout from 'templates/HomeLayout'
import Text from 'atoms/Text'

const Placeholder = styled.div`
  width: 100%;
  height: 150vh;
`

const Home = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <HomeLayout>
      <Text>
        {t('hello-world')}
      </Text>
      <Placeholder/>
    </HomeLayout>
  )
}

export default Home
