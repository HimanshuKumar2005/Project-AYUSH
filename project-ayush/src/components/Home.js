import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <header>
        <nav>
            <div className="logo">AYUSH Startups</div>
            <ul className="nav-links">
                <li><Link to="home">Home</Link></li>
                <li><Link to="login">Login</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </nav>
    </header>

    <main>
        <section className="hero">
            <h1>Welcome to the AYUSH Startup Registration Portal</h1>
            <p>Streamlining the registration process for startups in the AYUSH sector.</p>
            <a href="login.html" className="btn">Get Started</a>
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>The AYUSH Startup Registration Portal is designed to make the registration process more efficient, transparent, and accessible for startups in the Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy sectors.</p>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <p>Email: support@ayushstartups.in</p>
            <p>Phone: +91-1234567890</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 AYUSH Startups. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Home