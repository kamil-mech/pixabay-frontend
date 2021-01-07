import React from 'react'
import styled from 'styled-components'

export const maxContainerWidth = 1788
const StyledContainer = styled.div`
  max-width: ${maxContainerWidth}px;
  margin: auto;
`

const Container: React.FC = ({ children }): JSX.Element => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container
