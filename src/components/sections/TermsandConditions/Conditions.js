import React, { Component } from 'react';
import carretilla from '../svg/candado.svg';

class Conditions extends Component {

    render() {
        return (
            <>
                <section className="color1">

                    <div className="container container-terms">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title-wrap mr-lg-30 title_conditions">
                                    <h1 className="title-terms">Términos y <a className='subtitle-a'>Condiciones</a></h1>
                                    <p className="subtitle-conditions">
                                        Lea nuestros términos a continuación para obtener más
                                        información sobre sus derechos y responsabilidades como
                                        usuario de Fructus Vía.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-lg-30 c" >
                                <img className='carretilla' src={carretilla} loading='lazy' width="324" height="355" alt="img" />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section">

                    <div className="container ">
                        <div className="row column align-items-center">
                            <div className="col-lg-6">
                                <div className="mr-lg-30 subtitle-terms1">
                                    <h2 className="title-terms1">Última actualización: 07 junio 2022</h2>
                                    <p className="subtitle-terms1">
                                        1. Relación contractual<br /><br />
                                        LEA ESTAS condiciones DETENIDAMENTE ANTES DE ACCEDER O USAR LOS SERVICIOS.<br /><br />
                                        Mediante su acceso y uso de los Servicios usted acuerda vincularse jurídicamente por
                                        estas condiciones, que establecen una relación contractual entre usted y Fructus Vía
                                        SAPI de CV. Si usted no acepta estas condiciones, no podrá acceder o usar los Servicios.
                                        Estas condiciones sustituyen expresamente los acuerdos o compromisos previos con usted.
                                        Fructus Vía SAPI de CV podrá poner fin de inmediato a estas condiciones o cualquiera de
                                        los Servicios respecto de usted o, en general, dejar de ofrecer o denegar el acceso a los
                                        Servicios o cualquier parte de ellos, en cualquier momento y por cualquier motivo.<br /><br />

                                        Se podrán aplicar condiciones suplementarias a determinados Servicios, como políticas
                                        para un evento, una actividad o una promoción particular, y dichas condiciones suplementarias
                                        se le comunicarán en relación con los Servicios aplicables.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="mr-lg-30 terms2">

                                    <p className="subtitle-terms2">
                                        Las condiciones suplementarias se establecen además de las condiciones, y se considerarán una
                                        parte de estas, para los fines de los Servicios aplicables. Las condiciones suplementarias
                                        prevalecerán sobre las condiciones en el caso de conflicto con respecto a los Servicios aplicables.<br /><br />

                                        Fructus Vía SAPI de CV podrá modificar las condiciones relativas a los Servicios cuando lo
                                        considere oportuno. Las modificaciones serán efectivas después de la publicación por parte de
                                        Fructus Vía SAPI de CV de dichas condiciones actualizadas en esta ubicación o las políticas
                                        modificadas o condiciones suplementarias sobre el Servicio aplicable. Su acceso o uso continuado
                                        de los Servicios después de dicha publicación constituye su consentimiento a vincularse por las
                                        condiciones y sus modificaciones. <br /><br />

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </>
        );
    }
}

export default Conditions;