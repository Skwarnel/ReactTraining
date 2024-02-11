import React, {Component} from 'react';

class ClockTime extends Component {
    time = this.props.time;
    render() {
        return (
            <div>
                Jest teraz godzina:
                <p>{this.time}</p>
            </div>
        );
    }
}

export default ClockTime;