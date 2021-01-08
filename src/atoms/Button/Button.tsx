import React from 'react'
import styled, { ThemeProps, useTheme } from 'styled-components'

import Text from 'atoms/Text'

type StyledButtonProps = {
  backgroundColor: string
  small?: boolean
  large?: boolean
  outlined?: boolean
} & ThemeProps<Theme>

const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  height: ${({ large, small }) => large ? 42 : small ? 30 : 35}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)}px calc(${({ theme, small }) => theme.spacing(small ? 1 : 3)}px + 3px);
  border-radius: 50px;
  ${({ theme, outlined }) => outlined ? `border: 1px solid ${theme.palette.tertiary}` : 'border: 0'};
  background-color: ${({ backgroundColor }) => backgroundColor};
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    ${({ theme, outlined }) => {
      if (outlined) {
        return `
          border-color: ${theme.palette.info};
        `
      }
      return 'background-image: linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));'
    }}
  }
  &:hover > * {
    ${({ theme, outlined }) => outlined ? `color: ${theme.palette.info}` : ''};
  }
  &:active {
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 6px rgba(0,0,0,.2);
  }
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
`

interface ButtonProps {
  // Color variant: secondary (default: primary)
  secondary?: boolean
  // Color variant: tertiary (default: primary)
  tertiary?: boolean
  // Color variant: outlined (default: primary)
  outlined?: boolean
  // Size variant: small (default: medium)
  small?: boolean
  // Size variant: large (default: medium)
  large?: boolean
  bold?: boolean
  // Can be used to place icons before text
  frontAdornment?: JSX.Element
  // Can be used to place icons after text
  backAdornment?: JSX.Element
  children: React.ReactNode
}
const Button = ({
  children,
  secondary,
  tertiary,
  outlined,
  small,
  large,
  bold,
  frontAdornment,
  backAdornment
}: ButtonProps): JSX.Element => {
  const palette = useTheme().palette
  const bgColor = secondary
    ? palette.secondary : tertiary
      ? palette.tertiary : outlined
        ? palette.light : palette.primary
  const textColor = outlined
    ? palette.darkEmphasis : tertiary
      ? palette.dark : palette.light
  return <StyledButton
    backgroundColor={bgColor}
    large={large}
    small={small}
    outlined={outlined}
  >
    {frontAdornment}
    <Text
      color={textColor}
      h5={large}
      sub2={small && !bold}
      bold={bold}>
      {children}
    </Text>
    {backAdornment}
  </StyledButton>
}

export default Button
