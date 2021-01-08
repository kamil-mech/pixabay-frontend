import React from 'react'
import { useTheme } from 'styled-components'

const BurgerIcon = (): JSX.Element => {
  const palette = useTheme().palette
  return (
    <svg
      width="24"
      height="18"
      viewBox="99 100 24 18"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill={palette.darkEmphasis}
        fillRule="nonzero"
        d="M99.627 100.452h21.913v1.992H99.627v-1.992zm0 6.972h21.913v1.992H99.627v-1.992zm0 6.972h21.913v1.992H99.627v-1.992z"
      ></path>
    </svg>
  )
}

export default BurgerIcon
