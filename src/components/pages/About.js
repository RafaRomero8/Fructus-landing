import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Footer from '../layouts/Footer';
import Content from '../sections/about/Content';

const pagelocation = 'Sobre Nosotros'

class About extends Component {
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

export default About;