import React from 'react'
import PropTypes from 'prop-types'

const PoliticoTop = ({ politico:{ id, nome, data_nascimento, descricao, ultimo_mandato, image } }) => {

    const background = `http://localhost:8888/fichapolitica/public/img/politicos/${image}`

    return (
        <div className="profile-top bg-primary p-2">
          <span style={{backgroundImage: "url(" + background + ")"}} className="round-img"></span>
          <h1 className="large">{nome}</h1>
          { ultimo_mandato !== null && 
            <p className="lead">
                {ultimo_mandato.cargo} {' - '} {ultimo_mandato.partido}
                <small className="small-break">Mandato: { ultimo_mandato.ano_inicio }{' - '} { ultimo_mandato.ano_fim ? ultimo_mandato.ano_fim : 'Atualmente' }</small>
                
            </p> 
          }
          <p>Data de nascimento: {data_nascimento}</p>
          <p>{descricao}</p>
        </div>
    )
}

PoliticoTop.propTypes = {

}

export default PoliticoTop
