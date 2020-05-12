import React, { Component } from 'react';

class Bomb extends Component {
    constructor (props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    shouldIExplode = () => {
        if (this.state.secondsLeft < 1) {
            return 'Boom!'
        } else {
            return '${this.state.secondsLeft}'
        }
    }

    render() {
        return (
            <div>
                {shouldIExplode()}
            </div>
        )
    }
}

export default Bomb;