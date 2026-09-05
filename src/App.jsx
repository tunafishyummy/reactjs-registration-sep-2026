import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Registration from './Registration'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
