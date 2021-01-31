import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjectById } from '../../actions/projeto'
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const Projeto = ({ getProjectById, auth, 
    projeto:{
        projeto,
        loading
    },
    match 
}) => {

    useEffect(() => {
        getProjectById(match.params.id);
    }, [getProjectById, match.params.id]);

    return (
        <Fragment>
            {
                projeto === null || loading === true 
                
                ?
                    <Spinner/>
                :
                    <Fragment>
                        <h3 class="text-dark">{projeto.nome}</h3>
                        <p>
                            
                        </p>
                        <p><strong>Protocolo: </strong>{projeto.protocolo}</p>
                        <p><strong>Tipo: </strong>{projeto.tipo.nome}</p>
                        <p><strong>Data: </strong><Moment format='YYYY/MM/DD'>{projeto.created_at}</Moment></p>
                        <br/>
                        <p><strong>Descricao: </strong><br />{projeto.descricao}</p>
                        <br/>
                        <p><strong>Status: </strong>{ projeto.aprovado === null ? 'Pendente' : 'Finalizado' }</p>
                        <p><strong>Aprovado: </strong>{ projeto.aprovado === null ? 'Projeto em votação' : (projeto.aprovado ? 'Sim' : 'Não') }</p>
                        <p><strong>Total de votos: </strong>{projeto.total_votos}</p>
                        <p><strong>Relator: </strong><Link to={`/politico/${projeto.relator.politico_id}`}>{projeto.relator.nome}</Link></p>
                    </Fragment>


            }
        </Fragment>
    )
}

Projeto.propTypes = {
    auth: PropTypes.object.isRequired,
    projeto: PropTypes.func.isRequired,
    getProjectById:PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    auth:state.auth,
    projeto:state.projeto
})

export default connect(
    mapStateToProps,
    { getProjectById }
)(Projeto)
