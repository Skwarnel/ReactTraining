import React from "react";
function CurrencyConverter(props){
    const {from, to, value, rate} = props;
    return (
        <>
            <div>
                <strong>{value}</strong> {from} => <strong>{Number.parseFloat(value * rate).toFixed(2)}</strong> {to}
            </div>
        </>
    )
}

export default CurrencyConverter;