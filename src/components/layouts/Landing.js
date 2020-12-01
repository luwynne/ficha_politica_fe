import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Landing = props => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                <h1 className="x-large">Ficha Política</h1>
                <p className="lead">
                    Pesquise a ficha de politicos em todos os âmbitos e setores.
                </p>
                <div className="buttons">
                    <Link to="/politicos" className="btn btn-primary">Pesquisar</Link>
                </div>
                </div>
            </div>
        </section>
    )
}

Landing.propTypes = {

}

export default Landing
