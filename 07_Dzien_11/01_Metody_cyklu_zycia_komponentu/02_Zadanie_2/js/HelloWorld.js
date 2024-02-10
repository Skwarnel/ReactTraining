import React, {Component} from 'react';

class HelloWorld extends Component {
    state = {
        text: "Hello, World!",
        seconds: 0
    }

    componentDidMount() {
        console.log("Hello, World: Zamontowałem się");
        this.idMessage = setTimeout(() => {
            this.setState((prev) => {
                return {
                    text: "Hi Everyone",
                }
            })
        }, 4000)

        this.idInterval = setInterval(() => {
            console.log(`Jestem timerem z HelloWorld  ${this.state.seconds + 1}`);
            this.setState((prev) => {
                return {
                    seconds: this.state.seconds + 1
                }
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Updatuję się");
    }

    componentWillUnmount() {
        console.log("Odmontowałem się");
        clearTimeout(this.idMessage);
        clearInterval(this.idInterval);
    }
    render() {
        return (
            <div>
                <h1>Component Hello World: {this.state.text}</h1>
                <h2>Component Hello World: {this.state.seconds}</h2>
            </div>
        );
    }
}

export default HelloWorld;