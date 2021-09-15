import { createGlobalStyle, ThemeProps } from "styled-components";

export const theme = {
  fonts: {
    basic: '"Raleway", sans-serif',
    accent: '"Permanent Marker", cursive',
  },
  colors: {
    orange: "#f4ae40",
    blue: "#387af5",
    pink: "#eb57a3",
    // instagram: "#7232bd",
    instagram: "#2a5885",
    instagramHover: "#c32aa3",
    // whatsApp: "#075e54",
    whatsApp: "#2a5885",
    whatsAppHover: "#25d366",
    vk: "#2a5885",
    vkHover: "#4a76a8",
    // Credits: https://colors.lol/fou.
    gray: "#aaa",
    white: "#fff",
    yellow: "#FFE6A2",
    primeColor: "#33779B",
    bodyColor: "#A0C9DF",
    blueCircle: "#33779B",
    lightBlue: "rgba(255, 255, 255, 0.4)",
    decorLightBlue: "rgba(255, 255, 255, 0.27)",
  },
};

export type MainThemeProps = ThemeProps<typeof theme>;
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.basic};
    background-color: ${({theme}) => theme.colors.bodyColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before { box-sizing: border-box; }

  h1, h2, h3, h4, h5, h6, p { margin: 0; }
  a { color: ${({ theme }) => theme.colors.white} }
  a:hover { cursor: pointer; }

  .main {
    padding: 73px 0 20px;
    min-height: calc(100vh - 50px);
  }
`;
