import React from 'react'
import styled, { useTheme } from 'styled-components'

const StyledLike = styled.svg`
  margin-bottom: 3px;
`

const LikeIcon = (): JSX.Element => {
  const palette = useTheme().palette
  return (
    <StyledLike
      width="16"
      height="16"
      viewBox="199 199 13 13"
      preserveAspectRatio="xMidYMid meet">
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill={palette.light}
        fillRule="nonzero"
        d="M201.726 210.9l-2.496.038.028-5.458s2.124.159 2.642-.064c.436-.111 3.314-1.647 4.184-2.53.733-.652.986-1.318 1.269-2.181.226-.872 1.051-.685 1.414-.478.472.269.53.875.48 1.369-.062.376-.236.96-.521 1.488-.219.408-.583.757-.669.899-.11.176-.555.518-.382.574.947.209 1.385.269 2.729.622.508.276.633.355.777.882.105.541-.193 1.173-.65 1.578-.087.048-.478.534-.478.534s-1.013 2.824-1.544 3.422c-.336.298-.568.368-.956.414-.243 0-1.285-.047-2.468-.189-1.425-.219-2.356-.887-3.355-.917l-.004-.003z"
      ></path>
    </StyledLike>
  )
}

export default LikeIcon
