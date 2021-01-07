import React, { useMemo } from 'react'
import styled, { DefaultTheme, StyledComponent, ThemeProps } from 'styled-components'

interface TextProps {
  center?: boolean
  // Tag and size variant: h1 (default: body)
  h1?: boolean
  // Tag and size variant: h2 (default: body)
  h2?: boolean
  // Tag and size variant: h3 (default: body)
  h3?: boolean
  // Tag and size variant: h4 (default: body)
  h4?: boolean
  // Tag and size variant: h5 (default: body)
  h5?: boolean
  // Tag and size variant: h6 (default: body)
  h6?: boolean
  // Tag and size variant: sub (default: body)
  sub?: boolean
  color?: string
  children: React.ReactNode
}
type StyledTextProps = TextProps & ThemeProps<Theme>
// For now, based on https://material-ui.com/components/typography/
// and the actual pixabay style
const fontFamily = 'font-family: Open Sans,sans-serif'
const color = ({ theme, color }: StyledTextProps): string =>
  `color: ${color ?? theme.palette.dark}`
const padding = 'padding: 0'
const margin = 'margin: 0'
const center = ({ center }: StyledTextProps): string => center ? 'text-align: center' : ''
const StyledH1 = styled.h1<StyledTextProps>`
  ${fontFamily};
  font-size: ${({ theme }) => theme.fontSize(60)};
  font-weight: 400;
  ${color};
  ${padding};
  ${margin};
  ${center};
`
const StyledH2 = styled.h2<StyledTextProps>`
  ${fontFamily};
  font-size: ${({ theme }) => theme.fontSize(32)};
  font-weight: 400;
  ${color};
  ${padding};
  ${margin};
  ${center};
`
const StyledH3 = styled.h3<StyledTextProps>`
  ${fontFamily};
  font-size: ${({ theme }) => theme.fontSize(30)};
  font-weight: 400;
  ${color};
  ${padding};
  ${margin};
  ${center};
`
const StyledH4 = styled.h4<StyledTextProps>`
  ${fontFamily};
  font-size: ${({ theme }) => theme.fontSize(24)};
  font-weight: 400;
  ${color};
  ${padding};
  ${margin};
  ${center};
`
const StyledH5 = styled.h5<StyledTextProps>`
  ${fontFamily};
  font-size: ${({ theme }) => theme.fontSize(16)};
  font-weight: 400;
  ${color};
  ${padding};
  ${margin};
  ${center};
`
const StyledH6 = styled.h6<StyledTextProps>`
  ${fontFamily};
  font-size: ${({ theme }) => theme.fontSize(15)};
  font-weight: 500;
  ${color};
  ${padding};
  ${margin};
  ${center};
`
const StyledBody = styled.div<StyledTextProps>`
  ${fontFamily};
  font-size: ${({ theme }) => theme.fontSize(14)};
  font-weight: 400;
  ${color};
  ${padding};
  ${margin};
  ${center};
`
const StyledSub = styled.div<StyledTextProps>`
  ${fontFamily};
  font-size: ${({ theme }) => theme.fontSize(13)};
  font-weight: 400;
  ${color};
  ${padding};
  ${margin};
  ${center};
`

type TextElement = StyledComponent<any, DefaultTheme, TextProps, never>
const selectElement = ({ h1, h2, h3, h4, h5, h6, sub }: TextProps): TextElement => {
  return [
    h1 && StyledH1,
    h2 && StyledH2,
    h3 && StyledH3,
    h4 && StyledH4,
    h5 && StyledH5,
    h6 && StyledH6,
    sub && StyledSub
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  ].find(Boolean) || StyledBody
}
const Text = (props: TextProps): JSX.Element => {
  const TextElement = useMemo(() => selectElement(props), [props])
  return <TextElement {...props} />
}

export default Text
