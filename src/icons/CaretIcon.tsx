import React from 'react'
import styled from 'styled-components'

const StyledCaret = styled.svg`
  margin-top: 2px;
`

const CaretIcon = (): JSX.Element => {
  return (
    <StyledCaret
      width="16"
      height="8"
      viewBox="150 380 16 8"
      preserveAspectRatio="xMidYMid meet">
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        fillRule="nonzero"
        stroke="#878A9E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.79"
        d="M150.335 380.239l5.377 5.777 5.379-5.777"
      />
    </StyledCaret>
  )
}

export default CaretIcon
