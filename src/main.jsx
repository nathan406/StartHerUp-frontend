import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Landing page component
function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">SheInnovate</h1>
          <p className="text-xl text-white mb-8">
            Empowering women in technology and innovation
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export { LandingPage }


// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
