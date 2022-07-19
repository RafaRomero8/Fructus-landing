import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Content from '../sections/PersonalData/Content';
import Footer from '../layouts/Footer';
const pagelocation = 'Aviso de privacidad de datos personales'

class PersonalData extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Fuctus Via | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Content/>
                <Footer footer={{ style:"ct-footer footer-dark" }} />
            </Fragment>
        );
    }
} 

export default PersonalData;