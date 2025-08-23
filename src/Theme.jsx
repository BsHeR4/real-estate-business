// src/theme.js
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  components: {
    JoyDrawer: {
      styleOverrides: {
        content: {
          backgroundColor: 'var(--grey-10)',
        },
      },
    },
    JoyListItemButton: {
      styleOverrides: {
        root: {
          color: 'var(--color-white)',
          fontSize: '1.5rem'
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          color: 'var(--color-white)'
        }
      }
    },
    JoyIconButton: {
      styleOverrides: {
        root: {
          color: 'var(--color-white)',
          fontSize: '2.8rem'
        }
      }
    },
  },
});

export default theme;