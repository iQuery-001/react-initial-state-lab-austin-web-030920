import React, { Component } from 'react';

class Bomb extends Component {
    constructor (banana) {
        super()
        this.state = {
            secondsLeft: banana.initialCount
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