import React, { Component } from 'react';
import Granero from '../svg/granero.svg';


class Privacity extends Component {

    render() {
        return (
            <>
                <section className="color1">

                    <div className="container container-privacity">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title-wrap mr-lg-30">
                                    <h1 className="title-privacity">Aviso de privacidad <a className='subtitle-a'>de datos personales</a></h1>
                                    <p className="subtitle-terms">
                                        Obtenga más información sobre cómo Dribbble recopila y utiliza datos y sus
                                        derechos como usuario de Fructus Vía.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-lg-30 candado" >
                                <img className='candado' src={Granero} loading='lazy' width="324" height="355" alt="img" />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section ">

                    <div className="container section_privacity ">
                        <div className="row column align-items-center">
                            <div className="col-lg-6  privacity">
                                <div className="mr-lg-30 subtitle-terms1">
                                    <h2 className="title-terms1">Aviso de Privacidad</h2>
                                    <p className="subtitle-terms1">
                                        Fructus Vía SAPI de CV con domicilio en Lomas Anáhuac No. 88, interior 07, Interlomas, Estado de México.
                                        C.P. 52786, en cumplimiento con lo establecido en la Ley Federal de Protección de Datos Personales en
                                        Posesión de los Particulares, tiene entre sus objetos, la protección de la información personal proporcionada
                                        por cada persona a fructusvia.com.<br /><br />

                                        Por lo anterior, Fructus Via SAPI de CV, ha establecido los siguientes lineamientos para proteger dicha información.<br /><br />

                                        Este Aviso de Privacidad (en lo sucesivo el "Aviso de Privacidad") entrará en vigor desde su aceptación para los nuevos usuarios
                                        y está vigente desde junio de 2017.<br /><br />

                                        La privacidad de la información de los usuarios es muy importante para fructusvia.com. Es por esa razón que se toman las precauciones
                                        y recaudos para resguardar su información, utilizando los mecanismos de seguridad informática de protección de la información más completos y eficaces.<br /><br />

                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 privacity_two">
                                <div className="mr-lg-30 terms2">
                                    <p className="subtitle-terms2">


                                        Como parte normal de nuestra actividad recabamos y, en algunos casos, revelamos información sobre nuestros usuarios registrados y
                                        visitantes de fructusvia.com. Este Aviso de Privacidad describe la información que fructusvia.com recaba sobre los usuarios y visitantes
                                        de la plataforma de comercio electrónico y del sistema de pagos online, así como el uso de la misma.<br /><br />


                                        Este documento es parte integrante de los Términos y Condiciones Generales de fructusvia.com los cuales, en el momento de la inscripción el
                                        usuario acepta las disposiciones aquí contenidas.   <br /><br />
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

export default Privacity;