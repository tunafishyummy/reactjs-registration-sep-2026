import { BrowserRouter, NavLink, Routes, Route } from 'react-router'
import Home from './Home'
import About from './About'
import Registration from './Registration'

function App() {
  return (
    <BrowserRouter>

      <header className="site-header">
        <NavLink className="site-brand" to="/">College Admissions</NavLink>
        <nav className="site-nav" aria-label="Primary navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
