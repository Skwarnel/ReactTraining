import React, {Component} from 'react';

class CurrentDate extends Component {
    state = {
        time: new Date()
    }
    handleClick = (event) => {
        this.setState( (prev) => {
            return {
                time: new Date()
            }
        })
    }

    render() {
        return (
            <>
                <div>
                    {this.state.time.toTimeString()}
                </div>
                <button onClick={this.handleClick}>
                    Kliknij mnie i zaktualizuj datę
                </button>
            </>
        );
    }
}

export default CurrentDate;