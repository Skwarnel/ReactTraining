import React, {useState, Component} from "react";
import {createRoot} from "react-dom/client";
import HelloWorld from "./HelloWorld";
import PageContent from "./PageContent";

class App extends Component {
    state = {
        seconds: 0
    }

    componentDidMount() {
        console.log("App: Zamontowałem się");
        this.idInterval = setInterval(() => {
            // console.log(this.state.seconds + 1);
            this.setState((prev) => {
                return {
                    seconds: this.state.seconds + 1
                }
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                Jestem timerem w App:
                {this.state.seconds}
                {
                    this.state.seconds < 5 ? <HelloWorld/> : null
                }
                <PageContent/>
            </div>
        );
    }
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
