import React, { useMemo } from 'react'
import styled, { DefaultTheme, StyledComponent, ThemeProps } from 'styled-components'

interface TextProps {
  center?: boolean
  bold?: boolean
  underline?: boolean
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
  // Tag and size variant: sub2 (default: body)
  sub2?: boolean
  color?: string
  children: React.ReactNode
}
type StyledTextProps = TextProps & ThemeProps<Theme>
// For now, based on https://material-ui.com/components/typography/
// and the actual pixabay style
const fontFamily = ({ bold }: StyledTextProps): string => {
  return `font-family: ${bold ? 'Open Sans Bold,' : ''}Open Sans,sans-serif`
}
const fontWeight = 'font-weight: 400'
const color = ({ theme, color }: StyledTextProps): string =>
  `color: ${color ?? theme.palette.dark}`
const center = ({ center }: StyledTextProps): string => center ? 'text-align: center' : ''
const underline = ({ underline }: StyledTextProps): string => underline ? 'text-decoration: underline' : ''

// Using any for tag type here because using proper type singificantly slows down the transpiler
const makeTextElement = (tag: any, fontSize: number): StyledComponent<any, DefaultTheme, TextProps, never> => {
  // @ts-expect-error
  return styled[tag]`
    ${fontFamily};
    ${fontWeight};
    font-size: ${({ theme }: StyledTextProps) => theme.fontSize(fontSize)};
    ${color};
    ${center};
    ${underline};
  `
}

const elements = {
  h1: makeTextElement('h1', 60),
  h2: makeTextElement('h2', 32),
  h3: makeTextElement('h3', 30),
  h4: makeTextElement('h4', 24),
  h5: makeTextElement('h5', 16),
  h6: makeTextElement('h6', 15),
  body: makeTextElement('span', 14),
  sub: makeTextElement('span', 13),
  sub2: makeTextElement('span', 12)
}

type TextElement = StyledComponent<any, DefaultTheme, TextProps, never>
const selectElement = ({ h1, h2, h3, h4, h5, h6, sub, sub2 }: TextProps): TextElement => {
  return [
    h1 && elements.h1,
    h2 && elements.h2,
    h3 && elements.h3,
    h4 && elements.h4,
    h5 && elements.h5,
    h6 && elements.h6,
    sub && elements.sub,
    sub2 && elements.sub2
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  ].find(Boolean) || elements.body
}
const Text = (props: TextProps): JSX.Element => {
  const TextElement = useMemo(() => selectElement(props), [props])
  return <TextElement {...props} />
}

export default Text
