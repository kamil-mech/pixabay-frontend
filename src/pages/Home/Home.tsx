import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import HomeLayout from 'templates/HomeLayout'
import Text from 'atoms/Text'

const Placeholder = styled.div`
  width: 100%;
  height: 150vh;
`

const Home = (): JSX.Element => {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = t('home-title')
  }, [t])
  return (
    <HomeLayout>
      <Text>
        <Link to="/photos/buddha-statue-monument-buddhism-5868759">
          {t('see-sample-image')}
        </Link>
      </Text>
      <Placeholder/>
    </HomeLayout>
  )
}

export default Home
