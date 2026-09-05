import { NavLink } from 'react-router'

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="site-brand" to="/">College Admissions</NavLink>
      <nav className="site-nav" aria-label="Primary navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/registration">Registration</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
