import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  colors: {
    highlight: '#FFBA08',
    'highlight50%': '#80FFBA08',
    dark: {
      headingsAndText: '#47585B',
      info: '#999999',
      'info50%': '#80999999',
      black: '#000000',
    },
    light: {
      headingsAndText: '#F5F8FA',
      info: '#DADADA',
      white: '#FFFFFF',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'light.headingsAndText',
        color: 'dark.headingsAndText',
      },
    },
  },
})
