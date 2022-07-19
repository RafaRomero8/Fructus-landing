import React, { Component, Fragment } from 'react';
import Aboutus from "./Aboutus";
import App from './App';
import Solutions from './Solutions';
import Fond from './Carousels';
import Car from '../home/Car';


class Content extends Component {
    render() {
        return (
            <Fragment>
                <Aboutus />
                <App/>
                <div className='section'>
                <Solutions/>
                </div>
                <div className='section'>
                </div>
                
                <Fond/>
                <div className='section'>
                </div>8
                
                <Car/>
            </Fragment>
        );
    }
}

export default Content;