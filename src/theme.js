import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
palette: {
   primary: {
      main: '#556cd6',
   },
   secondary: {
     main: '#19857b',
   },
   error: {
   main: red.A400,
   },
  },
  overrides:{
    MuiDataGrid:{
        root:{
            width: '93%',
            margin: 'auto',
            height: '71% !important',
        },
    },
    notchedOutline:{
        borderColor: 'rgba(238, 194, 194, 0.23)!important',
        color: 'aliceblue',
    },
  },
  
});
