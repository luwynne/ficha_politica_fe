import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getProjectById } from '../../actions/projeto'
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';

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
                        { projeto.nome }
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
