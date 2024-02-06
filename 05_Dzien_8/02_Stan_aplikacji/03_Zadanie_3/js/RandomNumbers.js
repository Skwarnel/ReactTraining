import React, {Component} from 'react';

class RandomNumbers extends Component {
    state = {
        numbers: []
    }


    handleClick = (event) => {
        const newNumber = (Math.random() * (999 - 100)) + 100;
        this.setState( (prev) => {
            console.log("Działam");
            return {
                numbers: [...prev.numbers, newNumber]
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Wylosuj liczbę
                </button>
                <div>
                    <ul>
                        {this.state.numbers.map( (elem, index) => {
                            return <li key={index}>{elem}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default RandomNumbers;