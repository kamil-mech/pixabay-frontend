import React from 'react'

import Header from 'molecules/Header'

const HomeLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <React.Fragment>
      <Header/>
      <div>
        {children}
      </div>
      <footer>
        Footer
      </footer>
    </React.Fragment>
  )
}

export default HomeLayout
