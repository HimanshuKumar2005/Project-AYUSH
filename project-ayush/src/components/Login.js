import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <header>
        <nav>
            <div className="logo">AYUSH Startups</div>
            <ul className="nav-links">
                <li><Link to="home">Home</Link></li>
                <li><Link to="login">Login</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#contact">Contact</Link></li>
            </ul>
        </nav>
    </header>

    <main>
        <div className="form-container">
            <div className="form-box">
                <h1 id="title">Login</h1>
{/* 
                <!-- User and Admin Toggle --> */}
                <div className="toggle-buttons">
                    <button id="user-login-btn" onclick="showLoginForm()">User Login</button>
                    <button id="admin-login-btn" onclick="showAdminLoginForm()">Admin Login</button>
                </div>

                {/* <!-- Login Form --> */}
                <form id="login-form" className="input-group">
                    <input type="text" id="username" className="input-field" placeholder="Username" required/>
                    <input type="password" id="password" className="input-field" placeholder="Password" required/>
                    <button type="submit" className="submit-btn">Login</button>
                    <p>Don't have an account? <Link to="#" onclick="showRegistrationForm()">Register</Link></p>
                </form>

                {/* <!-- Admin Login Form --> */}
                <form id="admin-login-form" className="input-group hidden">
                    <input type="text" id="admin-username" className="input-field" placeholder="Username" required/>
                    <input type="password" id="admin-password" className="input-field" placeholder="Password" required/>
                    <button type="submit" className="submit-btn">Admin Login</button>
                </form>

                {/* <!-- Registration Form --> */}
                <form id="register-form" className="input-group hidden">
                    <input type="text" id="reg-username" className="input-field" placeholder="Username" required/>
                    <input type="email" id="reg-email" className="input-field" placeholder="Email" required/>
                    <input type="password" id="reg-password" className="input-field" placeholder="Password" required/>
                    <button type="submit" className="submit-btn">Register</button>
                    <p>Already have an account? <Link to="#" onclick="showLoginForm()">Login</Link></p>
                </form>
            </div>
        </div>
    </main>

    <footer>
        <p>&copy; 2024 AYUSH Startups. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Login