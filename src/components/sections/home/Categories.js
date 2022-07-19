import React, { Component } from 'react';
import Vector1 from '../svg/upsvg.svg';
import Vector2 from '../svg/downsvg.svg';
import Apple from '../svg/apple.svg';
import step1 from '../svg/step1.svg';
import step2 from '../svg/step2.svg';
import step3 from '../svg/step3.svg';
import step4 from '../svg/step4.svg';
import step5 from '../svg/step5.svg';
import step6 from '../svg/step6.svg';


class Categories extends Component {
    render() {
        return (
            <div className="section sect">

                <div className="container con">

                    <div className="containervec">
                        <div className="vec1">
                            <img src={Vector1} alt="img" loading='lazy' width="1920" height="250" />
                        </div>

                        <div className="comp1">
                            <img className='apple' src={Apple} alt="img" />
                            <h2 className="title comp">¿Cómo funciona? </h2>
                        </div>
                        <div className='uno'>
                            <img src={step1} alt='' loading='lazy' width="364" height="292" />
                        </div>
                        <div className='dos'>
                            <img src={step2} alt='' loading='lazy' width="364" height="292" />
                        </div>
                        <div className=' tres'>
                            <img src={step3} alt='' loading='lazy' width="364" height="292" />
                        </div>
                        <div className='cuatro'>
                            <img src={step4} alt='' loading='lazy' width="364" height="292" />
                        </div>
                        <div className=' cinco'>
                            <img src={step5} alt='' loading='lazy' width="364" height="309" />
                        </div>
                        <div className='seis'>
                            <img src={step6} alt='' loading='lazy' width="364" height="309" />
                        </div>

                        <div className='vec2'>
                            <img src={Vector2} alt="img" loading='lazy' width="190" height="357" />
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Categories;
