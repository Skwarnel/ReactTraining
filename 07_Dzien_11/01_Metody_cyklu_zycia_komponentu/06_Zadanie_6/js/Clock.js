import React, {Component} from 'react';
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";

class Clock extends Component {
    state = {
        date: new Date()
    }

    componentDidMount() {
        const idInterval = setInterval( () => {
            this.setState( (prevState) => {
                return {
                    date: new Date()
                };
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(idInterval);
    }

    render() {
        return (
            <div>
                Data pojawi się tutaj
                <ClockDate date = {this.state.date.toDateString()}/>
                <ClockTime time = {this.state.date.toTimeString()}/>
            </div>
        );
    }
}

export default Clock;