import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext'
import { SidebarProvider } from './Context/SidebarContext'
import { AuthProvider } from './Context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
