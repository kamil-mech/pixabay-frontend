import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import HomeLayout from 'templates/HomeLayout'
import Text from 'atoms/Text'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)}px;
  > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
  }
`

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
        <Column>
          <Link to="/photos/buddha-statue-monument-buddhism-5868759">
            {t('see-sample-image')}
          </Link>
          <Link to="/illustrations/north-star-stars-night-night-sky-2869817/">
            {t('see-sample-image')}
          </Link>
          <Link to="/vectors/pumpkin-hat-glove-umbrella-ghost-5529221/">
            {t('see-sample-image')}
          </Link>
        </Column>
      </Text>
      <Placeholder/>
    </HomeLayout>
  )
}

export default Home
