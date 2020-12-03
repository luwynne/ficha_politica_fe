import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const PoliticoMandatoProjeto = ({ 
    projeto:{ 
        aprovado, 
        created_at, 
        nome, 
        protocolo, 
        tipo,
        total_votos, 
        url,
        descricao 
    } 
}) => {
    console.log(nome)
    return (
        <div>
            <h3 class="text-dark">{nome}</h3>
            <p>
                
            </p>
            <p><strong>Protocolo: </strong>{protocolo}</p>
            <p>Tipo: {tipo.nome}</p>
            <p><strong>Data: </strong><Moment format='YYYY/MM/DD'>{created_at}</Moment></p>
            <p>Aprovado: {aprovado}</p>
            <p>Total de votos: {total_votos}</p>
        </div>
    )
}

PoliticoMandatoProjeto.propTypes = {
    projeto:PropTypes.object.isRequired,
}

export default PoliticoMandatoProjeto
