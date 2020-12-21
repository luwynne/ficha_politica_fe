import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PoliticoItem = ({ projeto:{
    id,
    nome,
    protocolo,
    tipo
}}) => {

    return (
        <div className="profile profile-block bg-light">
                <div>
                    <h2>{nome}</h2>
                        <Fragment>
                            <p>{tipo.nome}</p>
                            <p>{protocolo}</p>
                        </Fragment>
                    <Link to={`/projeto/${id}`} className="btn btn-primary">Ver projeto</Link>
                </div>
        </div>
    )
    
}

PoliticoItem.propTypes = {

}

export default PoliticoItem
