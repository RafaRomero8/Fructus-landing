import React, { Component } from 'react';
import images from './images';
import Slider from 'react-slick';
import flechaizq from '../svg/fleizq.svg';
import flechader from '../svg/fleder.svg';


class Aboutus extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
        };
        return (
            <div className="section">
                <div className="container">


                    <h2 className="title titcarrusel">Confían en nosotros</h2>
                    <div className='corrusel' >
                        <button className='fleder ' onClick={this.previous}> <img src={flechaizq} alt='' loading='lazy' width="31" height="53" /></button>

                        <Slider {...settings} drag='x' dragConstrains={{ right: 0 }} ref={c => (this.slider = c)}>

                            {images.map(image => (
                                <div className='items'>
                                    <img src={image} alt='' loading='lazy' width="132" height="144" />
                                </div>
                            ))}

                        </Slider>

                        <button className='fleizq' onClick={this.next}> <img src={flechader} alt='' loading='lazy' width="31" height="53" /></button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Aboutus;