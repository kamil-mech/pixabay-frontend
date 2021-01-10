import React from 'react'
import styled, { useTheme } from 'styled-components'

const StyledEditorsChoice = styled.svg`
  margin-bottom: 2px;
`

const EditorsChoiceIcon = (): JSX.Element => {
  const palette = useTheme().palette
  return (
    <StyledEditorsChoice
      width="18"
      height="20"
      viewBox="119 62 29 32"
      preserveAspectRatio="xMidYMid meet">
      <g
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            fill={palette.light}
            d="M8.363 21.438c-.65 0-1.27-.265-1.712-.738a2.511 2.511 0 01-.65-1.417 2.515 2.515 0 01-.679.089 2.366 2.366 0 01-1.978-1.092 3.285 3.285 0 01-.177-.325L.068 24.449a.728.728 0 00.738 1.033l2.538-.265a.702.702 0 01.679.324l1.417 2.126c.325.472 1.033.413 1.27-.089l3.158-6.642s0-.029-.029-.029a2.27 2.27 0 01-1.476.531zM23.801 24.449l-3.07-6.435a2.55 2.55 0 01-.177.295 2.366 2.366 0 01-1.978 1.092c-.236 0-.472-.029-.708-.118-.059.532-.266 1.033-.65 1.417a2.343 2.343 0 01-1.712.738 2.214 2.214 0 01-1.476-.531l-.029.029 3.158 6.642c.236.531.974.561 1.27.089l1.387-2.126c.148-.236.413-.354.708-.324l2.539.265c.561.089.974-.502.738-1.033zM14.669 18.949c.653.705 1.816.225 1.788-.734v-.029c-.028-.762.767-1.27 1.448-.959h.028c.88.395 1.76-.48 1.363-1.355a1.019 1.019 0 01.965-1.44h.029c.936.028 1.419-1.129.738-1.779l-.029-.028c-.567-.508-.369-1.439.341-1.693.88-.339.88-1.581 0-1.92-.71-.254-.908-1.186-.341-1.694l.029-.028c.681-.649.198-1.807-.738-1.778h-.029a1.02 1.02 0 01-.965-1.44c.397-.847-.511-1.75-1.363-1.355h-.028c-.71.311-1.476-.198-1.448-.96v-.028c.028-.932-1.135-1.411-1.788-.734-.511.565-1.448.367-1.732-.339-.341-.875-1.59-.875-1.931 0v.029a1.033 1.033 0 01-1.703.338C8.65.346 7.486.826 7.515 1.757v.028c.028.763-.767 1.271-1.448.96-.88-.395-1.76.508-1.363 1.355a1.019 1.019 0 01-.965 1.44H3.71c-.936-.028-1.419 1.129-.738 1.778l.029.029c.567.508.369 1.439-.341 1.693-.88.339-.88 1.581 0 1.92.71.254.908 1.185.341 1.693l-.029.029c-.681.649-.198 1.806.738 1.778h.029a1.019 1.019 0 01.965 1.44c-.397.875.511 1.75 1.363 1.355.709-.311 1.476.197 1.448.96v.028c-.029.931 1.135 1.411 1.788.734.511-.565 1.448-.367 1.703.339v.028c.341.875 1.59.875 1.931 0 .284-.763 1.192-.96 1.732-.395zm-2.697-2.654c-3.521 0-6.36-2.851-6.36-6.323 0-3.472 2.839-6.323 6.36-6.323 3.52 0 6.359 2.851 6.359 6.323 0 3.472-2.839 6.323-6.359 6.323z"
            transform="translate(121.298 63.199)"
          ></path>
          <path
            fill={palette.light}
            d="M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
            transform="translate(121.298 63.199)"
          ></path>
        </g>
      </g>
    </StyledEditorsChoice>
  )
}

export default EditorsChoiceIcon
