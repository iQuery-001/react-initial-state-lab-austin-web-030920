import React, { Component } from 'react';

class Bomb extends Component {
    constructor (props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Bomb;