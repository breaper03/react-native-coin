interface IColors {
  black: string
  white: string
  gray: string
  lightGray: string
  blue: string
  lightBlue: string
  red: string
  yellow: string
}

interface IFontSize {
  xxs: number
  xs: number
  sm: number
  base: number
  medium: number
  lg: number
  xl: number
  xxl: number
  xxxl: number
  xxxxl: number
}

interface IFontWeight {
  extraLight: string
  light: string
  normal: string
  bold: string
  extraBold: string
}

interface IBorder {
  sm: number
  base: number
  md: number
  lg: number
  xl: number
}

interface ITheme {
  colors: IColors
  fontSize: IFontSize
  fontWeights: IFontWeight,
  border: IBorder
}

export const theme: ITheme = {
  // Temas para fuentes, colores y componentes reutilizables
  colors: {
    black: "#161616",
    white: "#D1D1D1",
    gray: "#2f2f2f",
    lightGray: "#bbbbbb80",
    blue: "#61B0B7",
    lightBlue: "#B8E3FF",
    red: "#CD3939",
    yellow: "#FCCF55"
  },
  fontSize: {
    xxs: 9,
    xs: 9.6,
    sm: 10,
    base: 12,
    medium: 16,
    lg:20,
    xl: 22,
    xxl: 26,
    xxxl: 30,
    xxxxl: 32
  },
  fontWeights: {
    extraLight: '400',
    light: '500',
    normal: '600',
    bold: '700',
    extraBold: '800',
  },
  border: {
    sm: 0.5,
    base: 1.5,
    md: 2,
    lg: 2.5,
    xl: 3
  }
}