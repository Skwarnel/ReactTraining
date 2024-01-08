import React from 'react';

function ShopItem(props) {
    const {title, onBuy} = props;
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => onBuy()}>Kup</button>
        </div>
    );
}

export default ShopItem;