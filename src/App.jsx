import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './Home'
import About from './About'
import Registration from './Registration'
import './App.css'

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App