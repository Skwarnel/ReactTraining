import React, {Component} from 'react';

class MagicBox extends Component {
    state = {
        color: "#000"
    }

    handleClick = (event) => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.setState(prev => {
            return {
                color: randomColor
            }
        })
    }

    render() {
        return (
            <>
                <div style={{height: "200px", width: "200px", backgroundColor: this.state.color}}>

                </div>
                <button onClick={this.handleClick}>
                    Kliknij mnie i zmień kolor na taki, którego nie chcesz
                </button>
            </>
        );
    }
}

export default MagicBox;