import React, { Component } from 'react';

class Bomb extends Component {
    constructor (props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    shouldIExplode = () => {
        if (this.props.initialCount < 1) {
            return 'Boom!'
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