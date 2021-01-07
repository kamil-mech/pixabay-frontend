import React from 'react'
import { useTranslation } from 'react-i18next'

import Header from 'molecules/Header'
import Container from 'atoms/Container'

const HomeLayout: React.FC = ({ children }): JSX.Element => {
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <Header/>
      <Container>
        {children}
      </Container>
      <footer>
        {t('footer')}
      </footer>
    </React.Fragment>
  )
}

export default HomeLayout
