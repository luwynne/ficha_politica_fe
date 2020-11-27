import React from 'react'
import PropTypes from 'prop-types'

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
                    <a href="register.html" className="btn btn-primary">Pesquisar</a>
                </div>
                </div>
            </div>
        </section>
    )
}

Landing.propTypes = {

}

export default Landing
