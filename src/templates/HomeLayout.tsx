import React from 'react'
import { useTranslation } from 'react-i18next'

import Header from 'molecules/Header'

const HomeLayout: React.FC = ({ children }): JSX.Element => {
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <Header/>
      <div>
        {children}
      </div>
      <footer>
        {t('footer')}
      </footer>
    </React.Fragment>
  )
}

export default HomeLayout
