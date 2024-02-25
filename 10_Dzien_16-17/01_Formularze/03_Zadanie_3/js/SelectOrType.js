import React, {useState} from 'react';

const SelectOrType = (props) => {
    const [title, setTitle] = useState("");
    const [titles, setTitles] = useState(props.items);
    const [input, setInput] = useState("");

const handleTitleChange = (e) => {
    setTitle(e.target.value);
}

const handleInputChange = (e) => {
    setInput(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    setTitles(prev => [...prev, input]);
    setInput("");
    console.log(titles);
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <select value={title} onChange={handleTitleChange}>
                {
                    titles.map((elem, index) => {
                        return <option key={index} value={elem}>{elem}</option>
                    })
                }
                <option key="unique">others</option>
            </select>
            {
                title === "others" ? <><input type="text" value={input} onChange={handleInputChange}/>
                        <button type="submit">Send me</button>
                    </>
                    : null
            }
        </form>
    </div>

)
    ;
}
;

export default SelectOrType;