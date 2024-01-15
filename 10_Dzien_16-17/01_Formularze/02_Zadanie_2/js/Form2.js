import React, {useState} from 'react';
import FakeAPI from "./data/fakeAPI";

const Form = () => {
    const [form, setForm] = useState({user: "c", pass: "q"});
    const [data, setData] = useState();

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Działam");
        FakeAPI.login({
            username: form.user,
            password: form.pass
        }).then( o => {
            const result = response.text();
            setData(result);
        }).catch(err => {
            console.log("err", err);
        })


    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    Login:
                    <input type="text" name="user" value={form.user} onChange={changeHandler}/>
                </div>
                <div>
                    Password:
                    <input type="text" name="pass" value={form.pass} onChange={changeHandler}/>
                </div>
                <button>Wyślij</button>
            </form>
            <div>
                Result: {data}
            </div>
        </>
    );
};

export default Form;