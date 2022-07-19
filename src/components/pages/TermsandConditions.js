import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Content from '../sections/TermsandConditions/Content';
import Footer from '../layouts/Footer';

const pagelocation = 'Términos y Condiciones'

class TermsandConditions extends Component {
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

export default TermsandConditions ;