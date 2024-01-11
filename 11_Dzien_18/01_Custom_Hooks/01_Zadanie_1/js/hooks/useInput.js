import {useState} from "react";

export default (initVal) => {
    const [value, setValue] = useState(initVal);

    return [
        value,
        {
            value,
            onChange: e => {
                setValue(e.target.value);
            }
        }
    ]
}