import React, {Component} from 'react';

class ClockDate extends Component {
    date = this.props.date;
    render() {
        return (
            <div>
                Dzisiejsza data:
                <p>{this.date}</p>
            </div>
        );
    }
}

export default ClockDate;