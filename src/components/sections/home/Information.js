import React, { Component } from 'react';

import cosecha from '../svg/cosecha.svg';
class Information extends Component {
    render() {
        return (
            <div className="section color">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 color">
                            <div className="section-title-wrap mr-lg-30">
                                <h1 className="custom-primary custitle">¡Conoce</h1>
                                <h2 className="title custitle">Fructus Via!</h2>

                                <p className="subtitle tit1">
                                    Somos tu mejor aliado en abastecimiento
                                    estratégico de frutas y verduras. ¡Nuestra pasión es que
                                    cumplas tus sueños!
                                </p>
                                <p className="subtitle tit2">
                                    ¡Sabemos cuál es tu pasión! Te ayudamos a que tus productos
                                    tengan más sabor, sean rentables y tengas una mejor administración.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-4 mb-lg-30 cosecha " >
                            <img className='cosecha' src={cosecha} loading='lazy' width="1440" height="552" alt="img" />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Information;