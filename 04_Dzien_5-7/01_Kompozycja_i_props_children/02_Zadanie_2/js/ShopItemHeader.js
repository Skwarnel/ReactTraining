import React from 'react';

const ShopItemHeader = (props) => {
    const {title, img} = props;
    return (
        <>
            <header>
                <h1>{title}</h1>
                <img src={img}/>
            </header>
        </>
    );
};

export default ShopItemHeader;