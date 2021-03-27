import { useEffect } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css'
import { blue } from '@material-ui/core/colors'

import Routes from './routes';
import './global.css'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true,
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;



