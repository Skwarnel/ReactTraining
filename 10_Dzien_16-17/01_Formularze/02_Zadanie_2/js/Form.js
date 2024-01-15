import React, {useState} from 'react';

const Form = () => {
    const [form, setForm] = useState({ name: "", age: 25 });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    return (
        <form>
            <input type="text" name="name" value={form.name} onChange={handleChange}/>
            <input type="number" name="age" value={form.age} onChange={handleChange}/>
        </form>
    );
};

// const Form = () => {
//     const [form, setForm] = useState({user: "userName", pass: "password"});
//     const changeHandler = (e) => {
//         const {user, pass} = e.target;
//         setForm(prev => {
//             return {
//                 ...prev,
//                 [name]: user
//             }
//         })
//     }
//
//     return (
//         <>
//             <form>
//                 <div>
//                     UserName:
//                     <input type="text" name="user" value={form.user} onChange={changeHandler}/>
//                 </div>
//                 <div>
//                     Password:
//                     <input type="text" name="pass" value={form.pass} onChange={changeHandler}/>
//                 </div>
//                 <button>Wyslij</button>
//             </form>
//         </>
//     );
// };

export default Form;