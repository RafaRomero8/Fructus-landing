import React, { Component } from 'react';

import Coche from '../svg/coche.svg';

class Car extends Component {
    render() {
        return (
           
                <div className="container">

                    <div className=" col-lg-8 coche">
                        <img src={Coche} alt="img" loading='lazy'  width="710" height="324"/>
                        <div className="ct-dots" />
                    </div>

                </div>
           
        );
    }
}

export default Car;