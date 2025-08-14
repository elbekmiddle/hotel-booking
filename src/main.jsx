import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY  

if(!PUBLISHABLE_KEY) {
  throw new Error('xato PUBLISHABLE_KEY topilmadi')
}

createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
<BrowserRouter>
    <App />
  </BrowserRouter>,
    </ClerkProvider>
)
