import React, { Component } from 'react';

class Bomb extends Component {
    constructor () {
        super()
        this.state = {
            secondsLeft: this.props.initialCount
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