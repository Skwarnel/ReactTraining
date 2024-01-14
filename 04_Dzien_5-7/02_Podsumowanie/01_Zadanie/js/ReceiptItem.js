import React from 'react';

const ReceiptItem = (props) => {
    const {name, price, quantity} = props;
    return (
        <>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{price * quantity}</td>
        </>
    );
};

export default ReceiptItem;