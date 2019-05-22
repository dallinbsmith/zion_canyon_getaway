import React, { Component } from 'react';
import Tabs from './Tabs';
import AccomodationsCarousel from './AccomodationsCarousel';

class Accomodations extends Component {
    constructor(){
    super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Tabs/>
                <h4>Accomodations</h4>
                <p>something something4</p>
            </div>
        );
    }
}

export default Accomodations;