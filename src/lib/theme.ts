export const theme = {
  colors: {
    primary: {
      DEFAULT: "rgb(0, 0, 0)",
      dark: "rgb(255, 255, 255)",
    },
    secondary: {
      DEFAULT: "rgb(82, 82, 82)",
      dark: "rgb(200, 200, 200)",
    },
    background: {
      DEFAULT: "rgb(255, 255, 255)",
      dark: "rgb(18, 18, 18)",
    },
    surface: {
      DEFAULT: "rgb(245, 245, 245)",
      dark: "rgb(28, 28, 28)",
    },
    border: {
      DEFAULT: "rgb(229, 229, 229)",
      dark: "rgb(38, 38, 38)",
    },
  },
  spacing: {
    base: 8,
    get(units: number) {
      return `${units * this.base}px`
    },
  },
}

