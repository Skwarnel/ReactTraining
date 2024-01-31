import React, {Component} from 'react';

class ShowUserClass extends Component {
    render() {
        const {name, surname} = this.props;
        return (
            <div>
                <div>My name is: {name}</div>
                <div>My surname is: {surname}</div>
            </div>
        );
    }
}


export default ShowUserClass;
