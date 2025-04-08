import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './main'


//contains the routes for the app
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
    </Routes>
  )
}

export default App
