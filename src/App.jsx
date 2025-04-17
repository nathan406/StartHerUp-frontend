import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './main'
import Home from './Home'
import Sign from './Sign'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sign" element={<Sign />} />
    </Routes>
  )
}

export default App