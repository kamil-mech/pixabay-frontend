import React from 'react'

import Header from 'molecules/Header'
import Container from 'atoms/Container'

const HomeLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <React.Fragment>
      <Header/>
      <Container>
        {children}
      </Container>
    </React.Fragment>
  )
}

export default HomeLayout
