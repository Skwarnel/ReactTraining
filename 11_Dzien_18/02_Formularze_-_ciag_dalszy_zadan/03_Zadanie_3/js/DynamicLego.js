import React, {useState} from 'react';

const DynamicLego = () => {
    const [blocks, setBlocks] = useState(0);
    const changeBlocksHandler = (event) => {
        setBlocks(event.target.value);
        const list = <ul>
            {
                blocks.map((el, index) => {
                    return <li key={el.id}>
                        I am here
                    </li>
                })
            }
        </ul>;
    }



    return (
        <>
            <form>
                <input type="number" value={blocks} onChange={changeBlocksHandler} />
            </form>
            {list}
        </>
    );
};

export default DynamicLego;