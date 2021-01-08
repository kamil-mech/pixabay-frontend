import styled, { ThemeProps } from 'styled-components'

type CardProps = ThemeProps<Theme> & {
  small?: boolean
}
const Card = styled.div<CardProps>`
display: flex;
flex-direction: column;
padding: ${({ theme, small }) => theme.spacing(small ? 1 : 2)}px;
background-color: ${({ theme }) => theme.palette.lightEmphasis};
> * + * {
  margin-top: ${({ theme }) => theme.spacing(1)}px;
}
`
export default Card
