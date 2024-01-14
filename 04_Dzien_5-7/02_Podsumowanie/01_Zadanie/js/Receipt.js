import React from 'react';
import ReceiptHeader from "./ReceiptHeader";
import ReceiptItems from "./ReceiptItems";
import ReceiptFooter from "./ReceiptFooter";

const Receipt = (props) => {
    const {list} = props;
    return (
        <div>
            <table className="table">
                <ReceiptHeader/>
                <ReceiptItems list={list}/>
            </table>
        </div>
    );
};

export default Receipt;