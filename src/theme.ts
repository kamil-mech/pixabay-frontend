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
    xsUp: createBreakpoint(Direction.MIN, 0),
    smDown: createBreakpoint(Direction.MAX, 600),
    smUp: createBreakpoint(Direction.MIN, 600),
    mdDown: createBreakpoint(Direction.MAX, 960),
    mdUp: createBreakpoint(Direction.MIN, 960),
    lgDown: createBreakpoint(Direction.MAX, 1280),
    lgUp: createBreakpoint(Direction.MIN, 1280),
    xlDown: createBreakpoint(Direction.MAX, 1920),
    xlUp: createBreakpoint(Direction.MIN, 1920)
  }
}

declare global {
  type Theme = typeof theme
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme
