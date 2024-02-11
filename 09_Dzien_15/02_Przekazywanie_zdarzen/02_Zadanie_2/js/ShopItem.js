import React from 'react';

function ShopItem(props) {
    const {title, onBuy} = props;
    const handleClick = () => {
        if (typeof onBuy === 'function') {
            onBuy(title)
        }
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => handleClick()}>Kup</button>
        </div>
    );
}

export default ShopItem;