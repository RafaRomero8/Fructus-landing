import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import carriot from '../sections/images/zanahorias.webp';

class Footer extends Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <footer className={this.props.footer.style}>
                {/* Top Footer */}
                <div className="container">
                    <div className='pasto'>
                    </div>
                    <div className="footer-top">
                        <img className='carriot' src={carriot} alt='' loading='lazy' />
                    </div>

                </div>
                {/* Middle Footer */}
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Únete a Fructus Vía</h5>
                                <ul>
                                    <li> <Link className='decoration' to="#">Registro corporativo</Link> </li>
                                    <li> <Link className='decoration' to="#">Registrá tu propio negocio</Link> </li>
                                    <li> <Link className='decoration' to="#">Ser operador</Link> </li>
                                </ul>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Sobre Nosotros</h5>
                                <ul>
                                    <li> <Link className='decoration' to="#">Quiénes somos</Link> </li>
                                    <li> <Link className='decoration' to="/PersonalData">Políticas de privacidad</Link> </li>
                                    <li> <Link className='decoration' to="/TermsandConditions">Términos y condiciones</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Fructus Vía SAPI de CV </h5>
                                <ul>
                                    <li> <Link className='decoration1' to="#">luis.hugo.lopez@fructusvia.com</Link> </li>
                                    <li> <Link className='decoration1' to="#">Tel. +52 1 993 277 9592</Link> </li>

                                </ul>

                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 footer-widget separation-social">
                                <h5 className="widget-title">Redes Sociales</h5>
                                <ul className="social-media">
                                    <li> <a aria-label={"LinkedIn"} target="_blank" rel={"noopener noreferrer"} href="." alt='linkedin' className="linkedin"> <i className="fab fa-linkedin-in" /> </a> </li>
                                    <li> <a aria-label={"Facebook"} target="_blank" rel={"noopener noreferrer"} href="https://www.facebook.com/Fructusviacedis" className="facebook"> <i className="fab fa-facebook-f" /> </a> </li>
                                    <li> <a aria-label={"Instagram"} target="_blank" rel={"noopener noreferrer"} href="https://www.instagram.com/fructusvia/" alt='instagram' className="instagram"> <i className="fab fa-instagram" /> </a> </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">

                        <div className="footer-copyright">
                            <p> Copyright © 2022 Fructus Vía Todos los derechos reservados. </p>
                            <Link to="#" className="back-to-top" onClick={() => this.scrollToTop()}>Volver al inicio <i className="fas fa-chevron-up" /> </Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;