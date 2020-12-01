import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PoliticoItem = ({ politico:{
    id,
    nome,
    image,
    ultimo_mandato
} }) => {

    const background = `http://localhost:8888/fichapolitica/public/img/politicos/${image}`

    return (
        <div className="profile bg-light">
            <span style={{backgroundImage: "url(" + background + ")"}} className="round-img"></span>
                <div>
                    <h2>{nome}</h2>
                    { ultimo_mandato !== null &&
                        <Fragment>
                            <p>{ultimo_mandato.cargo}</p>
                            <p>{ultimo_mandato.partido}</p>
                        </Fragment>
                    }
                    <Link to={`/politico/${id}`} className="btn btn-primary">Ver perfil politico</Link>
                </div>
        </div>
    )
}

PoliticoItem.propTypes = {
    politico:PropTypes.object.isRequired
}

export default PoliticoItem
