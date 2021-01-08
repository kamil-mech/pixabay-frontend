import React from 'react'
import { useTheme } from 'styled-components'

const ReportIcon = (): JSX.Element => {
  const palette = useTheme().palette
  return (
    <svg
      width="15"
      height="14"
      viewBox="99 200 15 14"
      preserveAspectRatio="xMidYMid meet">
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill={palette.light}
        fillRule="nonzero"
        d="M110.086 202.402c1.042 0 1.977-.567 2.615-.996v8.113c-.637.428-1.574.996-2.614.996-1.041 0-1.974-.309-2.613-.737-.637-.43-1.574-.739-2.614-.739-1.041 0-1.975.532-2.614.961v-8.112c.637-.428 1.574-.958 2.615-.958 1.04 0 1.977.309 2.615.737.638.429 1.574.737 2.614.737l-.004-.002zm-9.586-2.346c.481 0 .872.39.872.871V214h-1.744v-13.073c0-.481.393-.871.874-.871h-.002z"
      ></path>
    </svg>
  )
}

export default ReportIcon
