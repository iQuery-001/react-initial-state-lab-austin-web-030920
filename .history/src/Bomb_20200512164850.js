import React, { Component } from 'react';

class Bomb extends Component {
    constructor (props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    shouldIExplode = () => {
        if (this.props.secondsLeft < 1) {
            return 'Boom!'
        } else {
            return '${this.state.secondsLeft}'
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Bomb;