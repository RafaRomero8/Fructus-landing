import React, { Component } from 'react';

import Slider from 'react-slick';
import $ from 'jquery';
import 'magnific-popup';

const gallery = [
    {
        img: "assets/img/fonds/1.png"
    },
    {
        img: "assets/img/fonds/2.png"
    },
    {
        img: "assets/img/fonds/3.png"
    },
    {
        img: "assets/img/fonds/4.png"
    },
    {
        img: "assets/img/fonds/5.png"
    }
];

class Carousels extends Component {
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
            slidesToShow: 3,
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
            <div className="ct-categories ">
                {/* Category Start */}
                <div className="ct-category-bg " style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/fond.svg)" }}>


                    <div className="ct-category-content ">
                        <div className="ct-category-content-inner ">
                            <div className="container ">
                                <Slider className="gallery-slider row " {...settings}>
                                    {gallery.map((item, i) => (
                                        <span to={item.img} key={i} >
                                            <img className='gallery-imgs carousel-slider' src={process.env.PUBLIC_URL + "/" + item.img} alt="post" loading='lazy' width="258" height="383" />
                                        </span>
                                    ))}
                                </Slider>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Category End */}
            </div>
        );
    }
}

export default Carousels;