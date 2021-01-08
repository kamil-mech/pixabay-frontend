import React from 'react'
import styled, { useTheme } from 'styled-components'

const StyledDownload = styled.svg`
  margin-bottom: 2px;
`

const DownloadIcon = (): JSX.Element => {
  const palette = useTheme().palette
  return (
    <StyledDownload
      width="15"
      height="16"
      viewBox="0 50 15 16"
      preserveAspectRatio="xMidYMid meet">
      <g
        xmlns="http://www.w3.org/2000/svg"
        fill={palette.light}
        fillRule="nonzero"
        stroke={palette.light}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="0.63"
          d="M10.749 57.376c-.103-.248-.505-.503-.702-.321l-1.779 1.639v-7.047c0-.366-.422-.664-.789-.664-.366 0-.789.298-.789.664v6.949l-1.867-1.63c-.201-.176-.51.162-.613.41a.664.664 0 00.144.724l2.656 2.656c.26.26.679.26.939 0l2.656-2.656a.664.664 0 00.144-.724z"
        ></path>
        <path
          strokeWidth="0.53"
          d="M12.732 65.591l-10.443.001A1.995 1.995 0 01.297 63.6v-6.068a.663.663 0 111.328 0V63.6c0 .365.297.663.664.663h10.443a.665.665 0 00.664-.664v-6.024a.664.664 0 111.328 0v6.024a1.994 1.994 0 01-1.992 1.992z"
        ></path>
      </g>
    </StyledDownload>
  )
}

export default DownloadIcon
