import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { searchProjetos } from '../../actions/projeto';
import ProjetoItem from './ProjetoItem';

const Projetos = ({ searchProjetos, projeto:{ projetos, loading } }) => {

    const [formData, setFormData] = useState({
        param:'',
    })

    const {param} = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setTimeout(() => {
            searchProjetos(e.target.value);
        }, 500)
        
    }

    return (
        <Fragment>
            { loading ? <Spinner/> 
            : <Fragment>
                <h1 className="large text-primary">Projetos</h1>
                <p className="lead">
                    <i className="fas fa-search"></i>{' '}Faça sua pesquisa
                </p>

                <form className="form">
                    <div className="form-group">
                        <input value={param} onChange={e => onChange(e)} type="text" placeholder="* School or Bootcamp" name="param"/>
                    </div>
                </form>

                <div className="profiles">
                    { projetos.length > 0 ? (
                        projetos.map(projeto => (
                            <ProjetoItem key={projeto.id} projeto={projeto}/>
                        ))
                    ) 
                    : <h4>Não foram encontrados projetos. Digite acima para pesquisar.</h4>}
                </div>
             </Fragment>
            }
        </Fragment> 
    )
}

Projetos.propTypes = {
    searchProjetos: PropTypes.func.isRequired,
    projeto: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    projeto: state.projeto
})

export default connect(
    mapStateToProps,
    { searchProjetos }
)(Projetos)
