import React, {Component} from 'react';
import HelloWorld from "../../02_Zadanie_2/js/HelloWorld";

class Box extends Component {
    state = {
        green: true
    }
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.idInterval = setInterval(() => {
            console.log(this.state.green);
            this.setState((prev) => {
                return {
                    green: !this.state.green
                }
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Zmieniam kolor");
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }


    render() {
        return (
            <div>
                {
                    this.state.green ? <div style={{backgroundColor: 'green'}}>
                        Jestem
                    </div> : <div style={{backgroundColor: 'red'}}>
                        Jestem
                    </div>
                }

            </div>
        );
    }
}

export default Box;