import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import $ from 'jquery';
import 'magnific-popup';


const gallery = [
    {
        img: "assets/img/app/app1.webp"
    },
    {
        img: "assets/img/app/app2.webp"
    }
];

class App extends Component {

    componentDidMount() {
        function popup() {
            $('.gallery-thumb').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
            });
        }
        popup()
    }
    render() {
        const settings = {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            focusOnSelect: true,
            responsive: [{
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
        };


        return (
            <div className="section container_slider">
                <div className="container  ">
                    <div className="section-title-wrap section-header text-center">
                        <h2 className="title titleapp">App Móvil Personalizada</h2>
                    </div>
                    <div className="container container_slider-section">
                        <Slider className="gallery-slider row container_slider-first" {...settings}>
                            {gallery.map((item, i) => (
                                <Link to={item.img} key={i} className="gallery-thumb">
                                    <img className='apps' src={process.env.PUBLIC_URL + "/" + item.img} alt="post" loading='lazy' width="428" height="494" />
                                </Link>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;