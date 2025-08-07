import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './main'
import Home from './Home'
import Sign from './Sign'
import Profile from './Network/Profile'
import Launch from './Network/Launch'
import Network from './Network/Network'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/launch" element={<Launch />} />
      <Route path="/network" element={<Network />} />
    </Routes>
  )
}


export default App