import './index.css'
import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { AuthProvider } from './hooks/useAuth'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
