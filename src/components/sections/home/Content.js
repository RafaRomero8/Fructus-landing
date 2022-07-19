import React, { Component, Fragment } from 'react';
import Information from './Information';
import Leader from './Leader';
import Categories from './Categories'
import Carousel from './Carousel';
import Testimonials from './Testimonials';
import Formulario from '../Form/Formulario';
import Car from './Car';

class Content extends Component {
    render() {
        return (
            <Fragment>
                
                <Information />
                <Leader/>
                <Categories/>
                <Carousel/>
                <Testimonials/>
                <Formulario/>
                <Car/>
            </Fragment>
        );
    }
}

export default Content;