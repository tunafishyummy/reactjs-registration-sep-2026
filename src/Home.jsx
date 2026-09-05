import { Link } from 'react-router'

function Home() {
  return (
    <main className="page-shell">
      <h1>College Admissions</h1>
      <h2>Welcome</h2>
      <p>
        Start your admissions application online in just a few minutes.
      </p>
      <p>
        Review the information you need, then complete the registration form when you are ready.
      </p>
      <Link className="home-cta" to="/registration">Begin registration</Link>
    </main>
  )
}

export default Home
