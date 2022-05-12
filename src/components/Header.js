import './Header.css'
import Home from './headerComponents/Home'

const Header = () => {
  return (
    <div className="Header">
        <Home/>
        <section className="Dashboard">Dashboard</section>
        <section className="Register">Register</section>
        <section className="Login">Login</section>
        <section className="Contact">Contact</section>
    </div>
  )
}

export default Header