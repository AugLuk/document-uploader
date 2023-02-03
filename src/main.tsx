import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { green, purple } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: green,
    // text: {
    //   primary: "#666"
    // }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
