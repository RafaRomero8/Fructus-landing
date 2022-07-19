import React, { Component } from 'react';
import Slider from 'react-slick';
import testimonials from "../../../data/testimonials.json";
import pera from '../svg/pera.svg';

class Testimonials extends Component {
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
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
        return (
            <section className="section testimonials">
                <div className="container">
                    <div className="section-title-wrap section-header text-center">
                        <h2 className="title testimonial">Testimonios</h2>
                    </div>
                    <div className='pera'>
                        <img src={pera} alt='' loading='lazy' width="327" height="703" />
                    </div>
                    <Slider className="ct-testimonials-slider" {...settings} ref={c => (this.slider = c)}>
                        {/* Testimonial item start */}
                        {testimonials.map((item, i) => (
                            <div key={i} className="ct-testimonial-slider-item card-testimonial">
                                <div className="ct-testimonial-item">
                                    <div className="ct-testimonial-thumb">

                                    </div>
                                    <div className="ct-testimonial-content">
                                        <img className='thumb' src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} loading='lazy' width="110" height="110" />
                                        <h5 className='test'>{item.name}</h5>
                                        <span>{item.desig}<br /></span>
                                        <span>{item.state}</span>
                                        <p>{item.comment}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Testimonial item end */}
                    </Slider>
                    <div className="ct-arrows centered-arrows with-margin">
                        <i className="fas fa-arrow-left slider-prev slick-arrow" onClick={this.previous} />
                        <i className="fas fa-arrow-right slider-next slick-arrow" onClick={this.next} />
                    </div>

                </div>
            </section>
        );
    }
}

export default Testimonials;