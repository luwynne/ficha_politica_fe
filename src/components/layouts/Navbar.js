import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth:{isAuthenticated, loading}, logout }) => {

    const authLinks = (
        <Fragment>
            <li><Link to="/login">Dashboard</Link></li>
            <li>
                <a onClick={logout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>{' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <li><Link to="/login">Login</Link></li>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i className="fas fa-landmark"></i> Ficha Política</Link>
            </h1>
            <ul>
                <li><Link to="/politicos">Politicos</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li><Link to="/processos">Processos</Link></li>
                { !loading && ( <Fragment> { isAuthenticated ? authLinks : guestLinks } </Fragment> ) }
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(Navbar)
