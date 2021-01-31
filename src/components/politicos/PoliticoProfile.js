import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPoliticoById } from '../../actions/politico';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';
import PoliticoTop from './PoliticoTop';
import PoliticoAbout from './PoliticoAbout';
import PoliticoMandatoProjeto from './PoliticoMandatoProjeto';

const PoliticoProfile = ({ 
    getPoliticoById, 
    auth, 
    politico:{
        politico,
        loading
    },
    match 
}) => {

    useEffect(() => {
        getPoliticoById(match.params.id); // match.params is a react variable to take the parameter passed by the url with that name
    }, [getPoliticoById, match.params.id]);

    return (
        <Fragment>
            {
                politico === null || loading === true 
                ?
                    <Spinner/>
                :
                    <Fragment>
                        <Link to="/politicos" className="btn btn-light">Voltar</Link>
                        <div className="profile-grid my-1">

                            <PoliticoTop politico={politico} />

                            <PoliticoAbout politico={politico} />
                            
                            {
                               
                                politico.mandatos.length > 0 
                                ? ( politico.mandatos.map(mandato => (
                                    mandato.projetos !== null && mandato.projetos.length > 0 ? (
                                        <div className="profile-exp bg-white p-2">
                                            <h2 className="text-primary">Projetos</h2>
                                            {
                                                mandato.projetos.map(projeto => (
                                                    <PoliticoMandatoProjeto projeto={projeto}/> 
                                                ))
                                            } 
                                        </div>
                                        
                                        )
                                        : 
                                        (<div className="profile-exp bg-white p-2">
                                            <h4>Nao foram encontrados projetos nesse</h4>
                                        </div>) 
                                    ) ) )
                                : (<div className="profile-exp bg-white p-2">
                                        <h4>Nao foram encontrados projetos</h4>
                                   </div>)    
                            }

                        </div>
                    </Fragment>
            }
        </Fragment>
    )
}

PoliticoProfile.propTypes = {
    getPoliticoById:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    politico: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    politico: state.politico
})

export default connect(
    mapStateToProps,
    { getPoliticoById }
)(PoliticoProfile)
