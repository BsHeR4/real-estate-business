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
          '--joy-palette-neutral-plainColor': 'var(--color-white)',
          '--joy-palette-text-primary': 'var(--color-white)',

          fontSize: '1.8rem',

          '&:hover': {
            backgroundColor: 'var(--grey-15)',
          },

          '&.Mui-selected': {
            backgroundColor: 'var(--purple-60)',
            color: 'var(--color-white)',
          },
        },
      },
    },

    JoyAccordionSummary: {
      styleOverrides: {
        root: {
          '--joy-palette-neutral-plainColor': 'var(--color-white)',
          '--joy-palette-neutral-plainHoverBg': 'var(--purple-70)',
          '--joy-palette-neutral-plainHoverColor': 'var(--color-white)',
          fontSize: '1.8rem',

          '&:hover': {
            backgroundColor: 'var(--grey-15)',
          },
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
    JoySvgIcon: {
      styleOverrides: {
        root: {
          color: 'var(--color-white)',
        }
      }
    },
  },
});

export default theme;