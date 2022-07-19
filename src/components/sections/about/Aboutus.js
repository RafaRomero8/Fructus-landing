import React, { Component } from 'react';

import Elote from '../svg/elote.svg'

class Aboutus extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30 section-title-wrap-one">

                                <h2 className="title custitle1">¿Qué hacemos?</h2>
                                <p className="subtitle tit5">
                                    Damos servicio integral a nuestros clientes B2B en
                                    abastecimiento estratégico en Frutas y verduras
                                    frescas mejorando cualquier experiencia de atención.
                                </p>
                                <p className="titp">
                                    Precio, calidad y métodos de pago.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 elote">
                            <img className='elote' src={Elote} alt="img" loading='lazy' width="649" height="760" />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;