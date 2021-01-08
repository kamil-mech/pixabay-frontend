import React from 'react'
import styled, { useTheme } from 'styled-components'

const StyledShare = styled.svg`
  margin-top: 4px;
`

const ShareIcon = (): JSX.Element => {
  const palette = useTheme().palette
  return (
    <StyledShare
      width="16"
      height="16"
      viewBox="149 199 16 16"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill={palette.darkEmphasis}
        fillRule="nonzero"
        d="M161.812 209.791c-.73 0-1.387.312-1.853.811l-5.445-2.713c.02-.126.032-.256.032-.388 0-.129-.013-.256-.03-.378l5.438-2.684a2.524 2.524 0 001.858.817c1.412 0 2.558-1.163 2.558-2.6 0-1.438-1.146-2.602-2.556-2.602-1.411 0-2.56 1.165-2.56 2.601 0 .13.014.255.03.379l-5.435 2.682a2.532 2.532 0 00-1.859-.817c-1.414 0-2.56 1.166-2.56 2.602 0 1.437 1.146 2.602 2.56 2.602.73 0 1.385-.315 1.853-.813l5.445 2.712c-.02.126-.032.256-.032.388 0 1.438 1.145 2.602 2.558 2.602 1.412 0 2.56-1.165 2.56-2.603 0-1.437-1.146-2.601-2.56-2.601l-.002.003z"
      ></path>
    </StyledShare>
  )
}

export default ShareIcon
