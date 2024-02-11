import React, {Component} from 'react';

class StrobeLight extends Component {
    state = {
        color: this.props.color,
        frequency: this.props.frequency,
        style: {height: '50px', width: '500px', backgroundColor: 'white'}
    }

    componentDidMount() {
        const idInterval = setInterval(() => {
            this.setState((prev) => {
                if (this.state.style.backgroundColor === 'white') {
                    return {
                        style: {backgroundColor: this.state.color}
                    }
                } else {
                    return {
                        style: {backgroundColor: 'white'}
                    }
                }

            })
        }, this.state.frequency)
    }

    componentWillUnmount() {
        clearInterval(idInterval);
    }

    render() {
        return (
            <div style={this.state.style}>
                style
            </div>
        );
    }
}

export default StrobeLight;