import React from 'react'

import Logo from 'atoms/Logo'

const HeaderTabs = (): JSX.Element => {
  return (
    <div>
      <span>Photos</span>
      <span>Illustrations</span>
      <span>Vectors</span>
      <span>Videos</span>
      <span>Music</span>
    </div>
  )
}

const HeaderActions = (): JSX.Element => {
  return (
    <div>
      <span>Explore</span>
      <span>Log In</span>
      <span>Join</span>
      <button>Upload</button>
    </div>
  )
}

const HomeLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <header>
      <Logo/>
      <HeaderTabs />
      <HeaderActions/>
    </header>
  )
}

export default HomeLayout
