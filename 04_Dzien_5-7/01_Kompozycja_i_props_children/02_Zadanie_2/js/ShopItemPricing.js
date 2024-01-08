import React from 'react';

const ShopItemPricing = (props) => {
    const {price} = props;
    return (
        <>
            <footer>
                Cena: {price} zł
                <button>Kup!</button>
            </footer>
        </>
    );
};

export default ShopItemPricing;