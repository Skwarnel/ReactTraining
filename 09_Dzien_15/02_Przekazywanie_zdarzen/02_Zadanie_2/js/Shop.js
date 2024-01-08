import React, {useState} from 'react';
import ShopItem from "./ShopItem";

const Shop = () => {
    const [list, setList] = useState([]);
    const buy = () => {
        console.log("Kupione");
    }
    return (
        <>
            <div>
                <ShopItem title="MacBook Pro" onBuy={buy}/>
                <ShopItem title="Dell X5500" onBuy={buy}/>
                <ShopItem title="Asus NT6000" onBuy={buy}/>
            </div>
            <ul>
                {list.map((elem, index) => {
                    return <li key={index}>{elem}</li>
                })
                }
            </ul>
        </>
    )
}
export default Shop;