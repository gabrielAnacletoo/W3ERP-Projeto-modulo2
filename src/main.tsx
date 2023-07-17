import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from '@/assets/styles/global-styles'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
          <GlobalStyles />
    <App />
  </React.StrictMode>,
)
