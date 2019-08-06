import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const customTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#007A53',
    },
    secondary: {
      main: '#FFCD00',
      // dark: will be calculated from palette.secondary.main,
    },
    // error: will use the default color
  },
});
