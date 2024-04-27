import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './assets/css/index.css'
import { AuthProvider } from './context/auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
