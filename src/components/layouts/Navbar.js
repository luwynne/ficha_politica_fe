import React from 'react'
import PropTypes from 'prop-types'

const Navbar = props => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <a href="index.html"><i className="fas fa-landmark"></i> Ficha Política</a>
            </h1>
            <ul>
                <li><a href="profiles.html">Politicos</a></li>
                <li><a href="register.html">Projetos</a></li>
                <li><a href="register.html">Processos</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {

}

export default Navbar
