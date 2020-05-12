import React, { Component } from 'react';

class ImageSlider extends Component {
    constructor() {
        super()
        state: {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
            <div>
                I am on slide {this.state.currentSlideIndex}
            </div>
        );
    }
}

export default ImageSlider;