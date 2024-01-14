import React from 'react';
import ReceiptItem from "./ReceiptItem";
import ReceiptFooter from "./ReceiptFooter";

const ReceiptItems = (props) => {
    const {list} = props;
    const sum = list.reduce( (prev, currentItem) => {
        return (prev + (currentItem.single_price * currentItem.qty));
    }, 0);
    return (
        <>
            <tbody>
                {
                    list.map((elem, index) => {
                        return (
                            <tr key={index}>
                                <ReceiptItem name={elem.name} price={elem.single_price} quantity={elem.qty}/>
                            </tr>
                        )
                    })
                }

            </tbody>
            <ReceiptFooter sum={sum}/>
        </>
    );
};

export default ReceiptItems;