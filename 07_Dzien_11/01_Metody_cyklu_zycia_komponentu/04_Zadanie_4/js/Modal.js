import React, {Component} from 'react';

class Modal extends Component {
    state = {
        display: false,
        seconds: 0
    }
    componentDidMount() {
        const idTimer = setTimeout( () => {
            this.setState( (prevState) => {
                return {display: !this.state.display}
            })
        }, 2000);

        const idInterval = setInterval( () => {
            this.setState( prevState => {
                console.log(this.state.display)
                return {
                    seconds: this.state.seconds + 1
                }
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearTimeout(idTimer);
        clearInterval(idInterval);
    }

    render() {
        const {heading} = this.props;
        console.log(heading);
        return (
            <div>
                <h2>Sekundy: {this.state.seconds}</h2>
                <p>Tu pojawi sie treść: {this.state.display && heading}</p>
            </div>
        );
    }
}

export default Modal;