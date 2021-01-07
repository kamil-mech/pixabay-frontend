import React from 'react'
import styled, { ThemeProps, useTheme } from 'styled-components'

import Text from 'atoms/Text'

type StyledButtonProps = {
  backgroundColor: string
} & ThemeProps<Theme>

const StyledButton = styled.button<StyledButtonProps>`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)}px calc(${({ theme }) => theme.spacing(3)}px + 3px);
  border-radius: 50px;
  border: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    background-image: linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));
  }
  &:active {
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 6px rgba(0,0,0,.2);
  }
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
  svg {
    margin-bottom: 1px;
  }
`

interface ButtonProps {
  // Size and color variant: primary (default: primary)
  secondary?: boolean
  // Size and color variant: primary (default: primary)
  tertiary?: boolean
  color?: string
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
  frontAdornment,
  backAdornment
}: ButtonProps): JSX.Element => {
  const palette = useTheme().palette
  return <StyledButton
    backgroundColor={secondary ? palette.secondary : tertiary ? palette.tertiary : palette.primary }
  >
    {frontAdornment}
    <Text color={tertiary ? palette.dark : palette.light }>
      {children}
    </Text>
    {backAdornment}
  </StyledButton>
}

export default Button
