enum Direction {
  MIN = 'min',
  MAX = 'max'
}
const createBreakpoint = (direction: Direction, magnitude: number): string => {
  return `@media (${direction}-width: ${magnitude}px)`
}

const theme = {
  // Converts font size from px to rem
  fontSize: (x: number) => `${x / 16}rem`,
  spacing: (x: number) => x * 8,
  palette: {
    primary: '#02be6e',
    secondary: '#008ddf',
    tertiary: '#e6e6e6',
    light: '#fff',
    dark: '#191b26',
    info: '#0a88d3',
    success: 'green',
    warning: 'yellow',
    error: 'red',
    emphasis: 'red',
    deemphasis: '#a5a8ab'
  },
  zIndex: {
    tooltip: 250,
    toast: 200,
    modal: 150,
    dialog: 150,
    backdrop: 125,
    drawer: 100
  },
  breakpoints: {
    xsDown: createBreakpoint(Direction.MAX, 365),
    xsUp: createBreakpoint(Direction.MIN, 365),
    smDown: createBreakpoint(Direction.MAX, 565),
    smUp: createBreakpoint(Direction.MIN, 565),
    mdDown: createBreakpoint(Direction.MAX, 765),
    mdUp: createBreakpoint(Direction.MIN, 765),
    lgDown: createBreakpoint(Direction.MAX, 1020),
    lgUp: createBreakpoint(Direction.MIN, 1020),
    xlDown: createBreakpoint(Direction.MAX, 1180),
    xlUp: createBreakpoint(Direction.MIN, 1180)
  }
}

declare global {
  type Theme = typeof theme
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme
