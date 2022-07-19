import React, { Component, Fragment } from 'react';
import Conditions from './Conditions';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Conditions />
                <div className='section'>
                </div>
            </Fragment>
        );
    }
}

export default Content;