import React from 'react';

const HoverEvent = () => {
    const eventHandler = () => {
        console.log("Najechano na przycisk");
    }

    const clickHandler = () => {
        console.log("Przycisk został kliknięty");
    }
    return (
        <div>
            <button onMouseEnter={eventHandler} onClick={clickHandler}>Click me</button>
        </div>
    );
};

export default HoverEvent;


// import React, {Component} from 'react';
//
// class HoverEvent extends Component {
//     const
//     eventHandler = () => {
//         console.log("Najechano na przycisk");
//     }
//
//     const
//     clickHandler = () => {
//         console.log("Przycisk został kliknięty");
//     }
//     render() {
//         return (
//             <div>
//                 <button onMouseEnter={this.eventHandler} onClick={this.clickHandler}>Kliknij mnie</button>
//             </div>
//         );
//     }
// }
//
// export default HoverEvent;