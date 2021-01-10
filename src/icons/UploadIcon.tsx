import React from 'react'
import styled, { useTheme } from 'styled-components'

const StyledUpload = styled.svg`
  margin-bottom: 1px;
`

const UploadIcon = (): JSX.Element => {
  const palette = useTheme().palette
  return (
    <StyledUpload
      width="15"
      height="16"
      viewBox="50 50 15 16"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        xmlns="http://www.w3.org/2000/svg"
        fill={palette.light}
        fillRule="nonzero"
        stroke={palette.light}
      >
        <path
          strokeWidth="0.63"
          d="M60.54 54.558c-.103.247-.462.506-.658.321l-1.823-1.728v7.487c0 .367-.422.665-.788.665-.367 0-.789-.298-.789-.665v-7.256l-1.78 1.497c-.205.173-.51-.162-.613-.41-.103-.248-.134-.445.056-.635l2.656-2.657a.665.665 0 01.939 0l2.656 2.657c.19.19.247.475.144.724z"
        ></path>
        <path
          strokeWidth="0.53"
          d="M61.527 65.591l-8.456.001a1.995 1.995 0 01-1.992-1.992v-5a.664.664 0 111.327 0v5c0 .365.299.663.665.663h8.456a.665.665 0 00.664-.664v-5a.664.664 0 011.328 0v5a1.995 1.995 0 01-1.992 1.992z"
        ></path>
      </g>
    </StyledUpload>
  )
}

export default UploadIcon
