import React from 'react';
import ShopItemHeader from "./ShopItemHeader";
import ShopItemDescription from "./ShopItemDescription";
import ShopItemPricing from "./ShopItemPricing";
import product from "./product";

const ShopItem = () => {
    const {title, description, image, price} = product;
    console.log(image);
    return (
        <>
            <section>
                <ShopItemHeader title={title} img={image}/>
                <ShopItemDescription description={description}/>
                <ShopItemPricing price={price}/>
            </section>
        </>
    );
};

export default ShopItem;