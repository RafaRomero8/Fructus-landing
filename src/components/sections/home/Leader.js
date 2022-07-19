import React, { Component } from 'react';
import canasta from '../images/canasta.webp'

class Leader extends Component {
    render() {
        return (
            <div className="section">

                <div className="container">

                    <div className="row align-items-center conatiner-media">
                        <div className="col-lg-6 mb-lg-30 ">
                            <img className='canasta' loading='lazy' src={canasta} width="714" height="677" alt="img" />

                        </div>
                        <div className="col-lg-6 titlemedia">
                            <div className="section-title-wrap mr-lg-30">
                                <h2 className="title tit3">Líder en el mercado</h2>
                                <p className="subtitle tit4">
                                    Fructus Vía te ofrece abastecimiento estratégico en frutas y
                                    verduras mejorando cualquier experiencia de atención.<br /> <br />
                                    Contamos con más de <a className='color-a' href='.'>60 años</a> de experiencia que
                                    respaldan nuestras operaciones en más de <a className='color-a' href='.'>22 capitales</a> de estado y <a className='color-a' href='.'>49 ciudades.</a>
                                </p>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Leader;