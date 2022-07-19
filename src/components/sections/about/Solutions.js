import React, { Component } from 'react';
import exhibicion from '../images/exhibicion.webp';
import industria from '../images/industria.webp';
import refri from '../images/refri.webp';
import envio from '../images/envios.webp';


class Solutions extends Component {
    render() {
        return (

            <div className='container container_solutions'>
                <div className='exi'>
                    <div className="section-title-wrap mr-lg-30">
                        <h2 className="title solutions">Solucionamos...</h2>
                    </div>

                    <div className="row align-items-center ">

                        <div className="col-lg-6 exh">
                            <img className='exh' src={exhibicion} loading='lazy' width="714" height="677" alt="img" />
                        </div>

                        <div className="col-lg-6 title-exp">
                            <div className="section-title-wrap ">
                                <h2 className="title titl">Exhibición de frutas y verduras frescas</h2>
                                <p className="subtitle tit1 titlep">
                                    Dependiendo del espacio de cada sucursal, les ayudamos realizando un
                                    diagnóstico conforme al plano de la tienda.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                <div className='exi-two'>
                    <div className="row align-items-center exportacion ">

                        <div className="col-lg-6 title-ind ">
                            <div className="section-title-wrap industry">
                                <h2 className="title titI">Industria y exportación</h2>
                                <p className="subtitle titlep_first">
                                    Contamos con 8 tarimas en bins de 450 kg desde Mochis,
                                    Sinaloa a Mc Allen, Texas.
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-6 ind">
                            <img className='ind' src={industria} loading='lazy' width="714" height="677" alt="img" />

                        </div>
                    </div>
                </div>


                <div className='exi-three'>

                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30 ref">
                            <img className='ref' src={refri} loading='lazy' width="714" height="677" alt="img" />
                        </div>
                        <div className="col-lg-6 title-camera">
                            <div className="section-title-wrap camera">
                                <h2 className="title titf">Cámara de refrigeración</h2>
                                <p className="subtitle titlep_second">
                                    Nuestra cámara refrigera de 25 a 50 toneladas, mercancía sobre tarima plástica,
                                    termperatura y humedad de conservación (en Monterrey, CDMX, Puebla y Cancún).
                                </p>

                            </div>
                        </div>
                    </div>
                </div>



                <div className="row align-items-center exportaciones">
                    <div className="col-lg-6 title-envio">
                        <div className="section-title-wrap send">
                            <h2 className="title titE">Envío consolidado para comercializadoras</h2>
                            <p className="subtitle titlep_therd">
                                Surtido o consolidado para supermercados regionales o abarroteras desde la
                                Central de abastos de Iztapalapa, México y la central de abasdos de Huixcolotia,
                                Puebla.
                            </p>

                        </div>
                    </div>

                    <div className="col-lg-6 mb-lg-30 envio">
                        <img className='envio' src={envio} loading='lazy' width="714" height="677" alt="img" />

                    </div>
                </div>

            </div>





        );
    }
}

export default Solutions;