import React, {Component} from 'react';

class Box extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const timer = setTimeout(function () {
            console.log("Komponent zamontowany");
        }, 5000);


    }


    render() {
        return (
            <div style={{backgroundColor: 'green'}}>
                Jestem
            </div>
        );
    }
}

export default Box;