import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import PoliticoItem from './PoliticoItem';
import { searchPoliticos } from '../../actions/politico';

const Politicos = ({ searchPoliticos, politico:{politicos,loading} }) => {
    
    const [formData, setFormData] = useState({
        param:'',
    })

    const {param} = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setTimeout(() => { // giving the search enough time to reload the component
            searchPoliticos(e.target.value);
        }, 500)
        
    }
    
    return (
        <Fragment>
            { loading ? <Spinner/> 
            : <Fragment>
                <h1 className="large text-primary">Politicos</h1>
                <p className="lead">
                    <i className="fas fa-search"></i>{' '}Faça sua pesquisa
                </p>

                <form className="form">
                    <div className="form-group">
                        <input value={param} onChange={e => onChange(e)} type="text" placeholder="* School or Bootcamp" name="param"/>
                    </div>
                </form>

                <div className="profiles">
                    { politicos.length > 0 ? (
                        politicos.map(politico => (
                            <PoliticoItem key={politico.id} politico={politico}/>
                        ))
                    ) 
                    : <h4>Não foram encontrados politicos. Digite acima para pesquisar.</h4>}
                </div>
             </Fragment>
            }
        </Fragment> 
    )
}

Politicos.propTypes = {
    searchPoliticos: PropTypes.func.isRequired,
    politico: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    politico: state.politico
})

export default connect(
    mapStateToProps,
    { searchPoliticos }
)(Politicos)
