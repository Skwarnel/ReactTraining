import React, {useState} from 'react';
import ShopItem from "./ShopItem";

const Shop = () => {
    const [list, setList] = useState([]);
    const buy = (title) => {
        setList(prevState => [...prevState, title]);
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