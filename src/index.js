import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { store } from "./store"
import { Provider } from "react-redux"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router } from "react-router-dom"
import "./sass/index.scss"
import "./services/axios-base"
import PageLoader from "./components/PageLoader"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xss: 375,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<PageLoader />}>
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Router>
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
