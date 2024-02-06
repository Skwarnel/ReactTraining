import React, {Component} from 'react';

class TextTyper extends Component {
    state = {
        counter: 0,
        text: this.props.text,
        textLengthToShow: 1
    }

    handleClick = (event) => {
        console.log("Działam");
        this.setState((prev) => {
            return {
                counter: prev.counter + 1,
                double: prev.double + 2
            }
        });
    }

    increaseHandle = (click) => {
        console.log("Zwiększam");
        if (this.state.textLengthToShow < this.state.text.length) {
            this.setState((prevState) => {
                return {
                    textLengthToShow: prevState.textLengthToShow + 1
                }
            })
        } else {
            console.log("Już nie zwiększam, a działam");
            console.log("TextLengthToShow: " + this.state.textLengthToShow);
        }
    }

    decreaseHandle = (click) => {
        console.log("Zmniejszam");
        if (this.state.textLengthToShow > 0) {
            this.setState((prevState) => {
                return {
                    textLengthToShow: prevState.textLengthToShow - 1
                }
            })
        } else {
            console.log("Już nie zmniejszam, a działam");
            console.log("TextLengthToShow: " + this.state.textLengthToShow);
        }
    }

    render() {
        return (
            <>
                <h1>Twoje kichnięcia: {this.state.text.slice(0, this.state.textLengthToShow)}</h1>
                <h2>Twoje kliknięcia suma: {this.state.counter}</h2>
                <p>
                    <button onClick={this.increaseHandle}>+</button>
                </p>
                <p>
                    <button onClick={this.decreaseHandle}>-</button>
                </p>
                <button onClick={this.handleClick}>Kliknij mnie</button>
            </>
        );
    }
}

export default TextTyper;