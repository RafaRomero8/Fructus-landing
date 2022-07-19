import React, { Component } from 'react';
import municipios from '../../../data/municipios.json';
import PostApi from '../../../services/PostApi';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
//import axios from 'axios';

import { NotificationContainer } from 'react-notifications';


class Formulario extends Component {
    constructor(props) {

        super(props);

        this.state = {
            showRecaptcha: true,
            token: "",
            form: {
                city: "",
                full_name: "",
                phone_number: "",
                message: "",
                sucursal: ""
            },
            idSucursal: -1

        };
        this.setToken = this.setToken.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handlerCity = this.handlerCity.bind(this)
    }


    handleChange = (e) => {
        this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } })
    }

    setToken(token) {
        this.setState({ token })

    }
    onChange = (result) => {
        this.setState({
            verified: true,
            reCaptchaResponse: result,
        })

    };
    handleSubmit = (event) => {
        event.preventDefault()

        const data = {

            "city": event.target.elements.city.value,
            "full_name": event.target.elements.full_name.value,
            "phone_number": event.target.elements.phone_number.value,
            "message": event.target.elements.message.value,
            "surcursal": event.target.elements.sucursal.value,
            "recaptcha_response": event.target.elements.recaptcha_response.value
        }
        PostApi(data)

    }



    handlerCity = (e) => {
        const correctvalue = e.target.selectedIndex - 1
        this.setState({ idSucursal: correctvalue })
    }


    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'success':
                    break;
                case 'error':
                    break;
            }

        };
    };


    render() {
        return (
            <div className="section">

                <div className="container col-lg-4">

                    <div className="col-lx-12 container_form-title">
                        <div className="section-title-wrap mr-lg-30">
                            <h2 className="title titleform">¡S&eacute; el primero en enterarte!</h2>

                            <p className="subtitle subform">
                                ¡Reg&iacute;­strate aqu&iacute;­ para enterarte de las fechas de lanzamiento!
                                Tambien puedes enviarnos tus dudas y nos pondremos en contacto contigo.
                            </p>

                        </div>
                    </div>
                    <div className="auth-wrapper form1">
                        <div className="auth-form">
                            <GoogleReCaptchaProvider reCaptchaKey="6LdEDCAgAAAAABufbi3oXPoaT6xmLgdp8SyoVfBS" language="es">
                                <form className='form' onSubmit={this.handleSubmit} id='form' >

                                    <label className='texts1'>¿De qu&eacute; ciudad nos contactas?</label>
                                    <select className="cityselector col-lg-12" name="city" id='city' onChange={this.handlerCity} >
                                        <option value={-1}>Seleccione una opci&oacute;n</option>

                                        {municipios.citys.map((elemento, i) => (
                                            <option key={"city" + i} value={elemento.city}>{elemento.city}</option>
                                        )
                                        )}
                                    </select>

                                    <label className='textsucursal'>Selecciona una sucursal</label>
                                    <select className="sucursalselector col-lg-12" name="sucursal" id='sucursal' onChange={this.handleChange} >

                                        {
                                            this.state.idSucursal > -1 &&
                                            (
                                                municipios.citys[this.state.idSucursal].sucursal.map((elemento, i) => (
                                                    <option key={"sucursal" + i} >{elemento}</option>

                                                ))
                                            )

                                        }

                                    </select>

                                    <div className=" col-lx-12">
                                        <label className="nameLabel" for="full_name">Nombre</label>
                                        <input className="nameInput" type="text" name="full_name" required="obligatorio" onChange={this.handleChange}></input>
                                    </div>

                                    <div className=" col-lx-12">
                                        <label className="Numberlabel" for="phone_number">N&uacute;mero de tel&eacute;fono</label>
                                        <input className="NumberInput" type="text" name="phone_number" required="obligatorio" onChange={this.handleChange}></input>
                                    </div>

                                    <div className=" col-lx-12">
                                        <label className="Messagelabel" for="message">Mensaje</label>
                                        <textarea name="message" className="form-control MessageInput" rows={8} onChange={this.handleChange} />
                                    </div>
                                    <div className="recaptcha">
                                        <p className='recaptcha-text '>This site is protected by reCAPTCHA and the Google
                                            <a className='recaptcha-terms' href="https://policies.google.com/privacy"> Privacy Policy</a> and

                                            <a className='recaptcha-terms' href="https://policies.google.com/terms"> Terms of Service</a> apply.
                                        </p>

                                        {this.state.showRecaptcha && <GoogleReCaptcha onVerify={this.setToken} />}
                                    </div>


                                    <input type="hidden" name="recaptcha_response" id="recaptchaResponse" value={this.state.token} />

                                    <button className="btn-custom btn-success" type="submit" onClick={this.createNotification('success')}>Registrarme</button>

                                    <NotificationContainer />

                                </form>
                            </GoogleReCaptchaProvider>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default Formulario;