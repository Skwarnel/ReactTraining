import React from 'react';

const ShopItemDescription = (props) => {
    const {description} = props;
    return (
        <>
            <article>
                <p>{description}</p>
            </article>
        </>
    );
};

export default ShopItemDescription;