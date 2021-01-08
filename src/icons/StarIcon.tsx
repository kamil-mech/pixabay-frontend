import React from 'react'
import styled, { useTheme } from 'styled-components'

const StyledStar = styled.svg`
  margin-bottom: 1px;
`

const StarIcon = (): JSX.Element => {
  const palette = useTheme().palette
  return (
    <StyledStar
      width="16"
      height="16"
      viewBox="199 125 13 13"
      preserveAspectRatio="xMidYMid meet">
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill={palette.light}
        fillRule="nonzero"
        d="M211.786 129.944l-3.156 3.04.718 4.321-3.871-2.059-3.89 2.017.763-4.313-3.123-3.074 4.343-.607 1.959-3.916 1.919 3.938 4.338.653zm-6.661-29.494c-3.256 0-5.898 2.277-5.898 5.087 0 1.464.723 2.782 1.873 3.71a7.854 7.854 0 01-1.206 2.159c1.181 0 2.698-.164 3.865-.926.44.092.896.144 1.367.144 3.26 0 5.902-2.277 5.902-5.087 0-2.809-2.642-5.087-5.9-5.087h-.003z"
      ></path>
    </StyledStar>
  )
}

export default StarIcon
