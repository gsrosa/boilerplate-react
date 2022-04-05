import { GlobalStyle } from 'assets/styles/global'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { routes } from './routes'

function App() {
  const elementRoutes = useRoutes(routes)

  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      {elementRoutes}
    </ThemeProvider>
  )
}

export default App
