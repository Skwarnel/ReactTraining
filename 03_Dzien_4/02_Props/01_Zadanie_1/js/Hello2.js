import React, {Component} from 'react';

class Hello2 extends Component {
    render() {
        const {name, surname} = this.props;
        return (
            <div>
                <div>{name} {surname}</div>
            </div>
        );
    }
}

export default Hello2;