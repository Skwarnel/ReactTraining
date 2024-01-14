import React from 'react';

const ShopList = (props) => {
    const {list} = props;
    console.log(list);
    const style={height: 100, width: 100};

    const listToRender = list.map((el, index) => {
        return <li key={index}>
            <div className="shopList">
                <h1>{el.title}</h1>
                <img src={el.image} style={style}/>
            </div>
        </li>
    })

    return (
        <div className="shopList">
            Działam
            <ul>
                {listToRender}
            </ul>
        </div>
    );
};

export default ShopList;