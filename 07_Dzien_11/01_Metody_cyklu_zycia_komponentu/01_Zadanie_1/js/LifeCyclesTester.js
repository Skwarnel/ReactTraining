import React, {Component} from 'react';

class LifeCyclesTester extends Component {
    state = {
        seconds: 0
    }

    constructor(props) {
        super(props);
        console.log("Konstruktor");
    }

    state = {
        seconds: 0
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prev => {
                return {
                    seconds: this.state.seconds + 1
                }
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Aktualizacja")
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        console.log("Odmontowany");
    }

    render() {
        if (this.state.seconds < 10) {
            return (
                <div>
                    <h3>Minęło {this.state.seconds}</h3>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>Minęło za dużo sekund</h3>
                </div>
            );
        }

    }
}

export default LifeCyclesTester;