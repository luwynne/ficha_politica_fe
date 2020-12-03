import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const PoliticoAbout = ({ politico:{ mandatos } }) => {
    return (
        <Fragment>
            {
                mandatos.length > 0 &&
                <div className="profile-about bg-light p-2">
                    <h2 className="text-primary">Mandatos</h2>
                    <div className="skills">
                        {
                            mandatos.map((mandato) => (
                                <div key={mandato.id} className="p-1">
                                    <i className="fa fa-check"></i> 
                                    {' '}{mandato.cargo}
                                    <small className="small-break">Periodo: { mandato.ano_inicio }{' - '} { mandato.ano_fim ? mandato.ano_fim : 'Atualmente'}</small>
                                </div>
                            ))
                        }
                    </div> 
                </div>
            }
        </Fragment>
    )
}

PoliticoAbout.propTypes = {
    politico:PropTypes.object.isRequired
}

export default PoliticoAbout
